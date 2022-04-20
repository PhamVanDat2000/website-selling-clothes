<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/ProfileModel.php';

$profileModel = new ProfileModel();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode($profileModel->fetchProfile($_GET['account_id'], $_GET['auth_token']));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $updateProfileData = json_decode(file_get_contents('php://input'), true);
    $account_id = $updateProfileData['account_id'];
    $token = $updateProfileData['auth_token'];
    $newName = $updateProfileData['new_name'];
    $newPhone = $updateProfileData['new_name'];
    $newAddress = $updateProfileData['new_address'];
    $newCountry =  $updateProfileData['new_country'];
    $newCity =  $updateProfileData['new_city'];
    echo json_encode($profileModel->updateProfile($account_id, $token, $newName, $newPhone, $newAddress, $newCountry, $newCity));
}
