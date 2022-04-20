<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/ProfileModel.php';

$profileModel = new ProfileModel();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $changePasswordData = json_decode(file_get_contents('php://input'), true);
    $account_id = $changePasswordData['account_id'];
    $newPassword = $changePasswordData['new_password'];
    $confirmPassword = $changePasswordData['confirm_password'];
    $oldPassword = $changePasswordData['old_password'];
    echo json_encode($profileModel->changePassword($account_id, $oldPassword, $newPassword, $confirmPassword));
}
