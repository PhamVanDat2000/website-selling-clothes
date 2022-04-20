<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/AuthModel.php';

$authModel = new AuthModel();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $signoutData = json_decode(file_get_contents('php://input'), true);
    $result = $authModel->signOut($signoutData['account_id'], $signoutData['auth_token']);
    echo json_encode($result);
}
