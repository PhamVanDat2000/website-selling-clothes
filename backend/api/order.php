<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/OrderModel.php';

$orderModel = new OrderModel();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode($orderModel->fetchOrderHistory($_GET['customer_id'], $_GET['auth_token']));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $orderData = json_decode(file_get_contents('php://input'), true);
    $result = $orderModel->submitNewOrder($orderData);
    echo json_encode($result);
}
