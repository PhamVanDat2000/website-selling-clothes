<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../config/Database.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $updateData = json_decode(file_get_contents('php://input'), true);
    $order_id = $updateData['order_id'];
    $new_status = $updateData['new_status'];
    $conn = Database::connect();
    $query = "UPDATE pending_orders
    SET order_status='$new_status'
    WHERE order_id=$order_id";
    $result = $conn->query($query);

    if ($result == false) {
        $err = mysqli_error($conn);
        echo json_encode(array("Status" => "Error", "Message" => "Update order status failed. $err"));
    } else {
        $query = "UPDATE customer_orders
        SET order_status='$new_status'
        WHERE order_id=$order_id";
        $conn->query($query);

        if ($result == false) {
            $err = mysqli_error($conn);
            echo json_encode(array("Status" => "Error", "Message" => "Update order status failed. $err"));
        } else {
            echo json_encode(array("Status" => "Success", "Message" => "Update order status successfully"));
        }
    }
}
