<?php
include_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../data/Order.php';
include_once __DIR__ . '/../models/ProductModel.php';
include_once __DIR__ . '/../models/AuthModel.php';

class OrderModel
{
    private $conn;
    private $pending_orders_table_name = 'pending_orders';
    private $customer_orders_table_name = 'customer_orders';

    public function __construct()
    {
        $this->conn = Database::connect();
    }

    public function submitNewOrder($orderData)
    {
        $customer_id = $orderData['customer_id'];
        $auth_token = $orderData['auth_token'];
        $authModel = new AuthModel();
        $verifyAuthTokenResult = $authModel->verifyAuthToken($customer_id, $auth_token);
        if (!isset($verifyAuthTokenResult['Status'])) {
            return array("Status" => "Error", "Message" => "Fetch profile failed");
        } elseif ($verifyAuthTokenResult['Status'] != "Valid") {
            return array("Status" => "Error", "Message" => "Fetch profile failed. " . $verifyAuthTokenResult['Message']);
        }

        $amount = $orderData['amount'];
        // insert to pending_orders
        foreach ($orderData['products'] as $item) {
            $query = "INSERT INTO {$this->pending_orders_table_name}
            VALUES(DEFAULT,$customer_id,0,{$item['product_id']},{$item['quantity']},'','pending')";
            $result = $this->conn->query($query);
            if ($result == false) {
                $err_msg = mysqli_error($this->conn);
                return array("Status" => "Error", "Message" => "$err_msg");
            }
            // insert to customer_orders
            $datetime = date('Y-m-d H:i:s');
            $newOrderId = $this->conn->insert_id;
            $query = "INSERT INTO {$this->customer_orders_table_name}
            VALUES($newOrderId,$customer_id,$amount,0,{$item['quantity']},'','$datetime','pending')";
            $result = $this->conn->query($query);
            if ($result == false) {
                $err_msg = mysqli_error($this->conn);
                return array("Status" => "Error", "Message" => "$err_msg");
            }
        }

        return array("Status" => "Successfully", "Message" => "Submited order successfully!");
    }

    public function fetchOrderHistory($customer_id, $auth_token)
    {
        $authModel = new AuthModel();
        $verifyAuthTokenResult = $authModel->verifyAuthToken($customer_id, $auth_token);
        if (!isset($verifyAuthTokenResult['Status'])) {
            return array("Status" => "Error", "Message" => "Fetch profile failed");
        } elseif ($verifyAuthTokenResult['Status'] != "Valid") {
            return array("Status" => "Error", "Message" => "Fetch profile failed. " . $verifyAuthTokenResult['Message']);
        }

        $query = "SELECT po.order_id, po.product_id, po.qty, po.order_status, co.order_date, co.due_amount
        FROM {$this->customer_orders_table_name} AS co
        INNER JOIN {$this->pending_orders_table_name} AS po ON co.order_id = po.order_id 
        WHERE po.customer_id = $customer_id";

        $result = $this->conn->query($query);
        if ($result == false) {
            $err = mysqli_error($this->conn);
            return array("Status" => "Error", "Message" => "Fetch profile failed. $err");
        } elseif ($result->num_rows == 0) {
            return [];
        } else {
            $orders = [];
            while ($row = $result->fetch_assoc()) {
                array_push(
                    $orders,
                    array(
                        "order_id" => $row['order_id'],
                        "product_id" => $row['product_id'],
                        "quantity" => $row['qty'],
                        "status" => $row['order_status'],
                        "order_date" => $row['order_date'],
                        "total_amount" => $row['due_amount']
                    )
                );
            }
            return $orders;
        }
    }


    public function __destruct()
    {
        $this->conn->close();
    }
}
