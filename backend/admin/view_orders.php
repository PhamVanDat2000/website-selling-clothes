<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/jquery.min.js"></script>
</head>

<body>



    <?php


    if (!isset($_SESSION['admin_email'])) {

        echo "<script>window.open('login.php','_self')</script>";
    } else {


    ?>

        <div class="row">
            <!-- 1 row Starts -->

            <div class="col-lg-12">
                <!-- col-lg-12 Starts -->

                <ol class="breadcrumb">
                    <!-- breadcrumb Starts  --->

                    <li class="active">

                        <i class="fa fa-dashboard"></i> Dashboard / View Orders

                    </li>

                </ol><!-- breadcrumb Ends  --->

            </div><!-- col-lg-12 Ends -->

        </div><!-- 1 row Ends -->


        <div class="row">
            <!-- 2 row Starts -->

            <div class="col-lg-12">
                <!-- col-lg-12 Starts -->

                <div class="panel panel-default">
                    <!-- panel panel-default Starts -->

                    <div class="panel-heading">
                        <!-- panel-heading Starts -->

                        <h3 class="panel-title">
                            <!-- panel-title Starts -->

                            <i class="fa fa-money fa-fw"></i> View Orders

                        </h3><!-- panel-title Ends -->

                    </div><!-- panel-heading Ends -->

                    <div class="panel-body">
                        <!-- panel-body Starts -->

                        <div class="table-responsive">
                            <!-- table-responsive Starts -->

                            <table class="table table-bordered table-hover table-striped">
                                <!-- table table-bordered table-hover table-striped Starts -->

                                <thead>
                                    <!-- thead Starts -->

                                    <tr>

                                        <th>#</th>
                                        <th>Customer</th>
                                        <th>Invoice</th>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Size</th>
                                        <th>Order Date</th>
                                        <th>Total Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>


                                    </tr>

                                </thead><!-- thead Ends -->


                                <tbody>
                                    <!-- tbody Starts -->

                                    <?php

                                    $i = 0;

                                    $get_orders = "select * from pending_orders";

                                    $run_orders = mysqli_query($con, $get_orders);

                                    while ($row_orders = mysqli_fetch_array($run_orders)) {

                                        $order_id = $row_orders['order_id'];

                                        $c_id = $row_orders['customer_id'];

                                        $invoice_no = $row_orders['invoice_no'];

                                        $product_id = $row_orders['product_id'];

                                        $qty = $row_orders['qty'];

                                        $size = $row_orders['size'];

                                        $order_status = $row_orders['order_status'];

                                        $get_products = "select * from products where product_id='$product_id'";

                                        $run_products = mysqli_query($con, $get_products);

                                        $row_products = mysqli_fetch_array($run_products);

                                        $product_title = $row_products['product_title'];

                                        $i++;

                                    ?>

                                        <tr>

                                            <td><?php echo $i; ?></td>

                                            <td>
                                                <?php

                                                $get_customer = "select * from customers where customer_id='$c_id'";

                                                $run_customer = mysqli_query($con, $get_customer);

                                                $row_customer = mysqli_fetch_array($run_customer);

                                                $customer_email = $row_customer['customer_email'];

                                                echo $customer_email;

                                                ?>
                                            </td>

                                            <td bgcolor="orange"><?php echo $invoice_no; ?></td>

                                            <td><?php echo $product_title; ?></td>

                                            <td><?php echo $qty; ?></td>

                                            <td><?php echo $size; ?></td>

                                            <td>
                                                <?php

                                                $get_customer_order = "select * from customer_orders where order_id='$order_id'";

                                                $run_customer_order = mysqli_query($con, $get_customer_order);

                                                $row_customer_order = mysqli_fetch_array($run_customer_order);

                                                $order_date = $row_customer_order['order_date'];

                                                $due_amount = $row_customer_order['due_amount'];

                                                echo $order_date;

                                                ?>
                                            </td>

                                            <td>$<?php echo $due_amount; ?></td>

                                            <td>
                                                <?php

                                                // if($order_status=='pending'){

                                                // echo $order_status='<div style="color:red;">Pending</div>';

                                                // }
                                                // else{

                                                // echo $order_status='Completed';

                                                // }
                                                $pending_op = "";
                                                $shipping_op = "";
                                                $complete_op = "";
                                                $select_style = "";
                                                if ($order_status=='pending'){
                                                    $pending_op = "selected";
                                                    $select_style = "style=\"color: red\"";
                                                } elseif ($order_status=='shipping'){
                                                    $shipping_op = "selected";
                                                    $select_style = "style=\"color: blue\"";
                                                } elseif ($order_status=='Complete'){
                                                    $complete_op = "selected";
                                                    $select_style = "style=\"color: green\"";
                                                } 

                                                echo "<select id=\"$order_id\" $select_style>
                                                <option value=\"pending\" $pending_op style=\"color: red\">Pending</option>
                                                <option value=\"shipping\" $shipping_op style=\"color: blue\">Shipping</option>
                                                <option value=\"Complete\" $complete_op style=\"color: green\">Complete</option>
                                                </select>"


                                                ?>
                                            </td>

                                            <td>

                                                <a href="index.php?order_delete=<?php echo $order_id; ?>">

                                                    <i class="fa fa-trash-o"></i> Delete

                                                </a>

                                            </td>


                                        </tr>

                                    <?php } ?>

                                </tbody><!-- tbody Ends -->

                            </table><!-- table table-bordered table-hover table-striped Ends -->

                        </div><!-- table-responsive Ends -->

                    </div><!-- panel-body Ends -->

                </div><!-- panel panel-default Ends -->

            </div><!-- col-lg-12 Ends -->

        </div><!-- 2 row Ends -->


    <?php }

    ?>
    <script>
        $('select').on('change', (e) => {
            new_status = e.target.value;
            order_id = e.target.attributes.id.value;
            fetch('http://localhost/assignment-web/backend/admin/update_order_status.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        order_id,
                        new_status
                    })
                }).then(res => res.json())
                .then(data => {
                    if (data['Status']==='Success'){
                        alert('Update order status successfully');
                    }
                })
                .catch(err => console.log(err))
                .finally(()=>{
                    location.reload();
                })
        })
    </script>
</body>

</html>