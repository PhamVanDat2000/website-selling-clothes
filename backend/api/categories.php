<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/CategoryModel.php';

$categoryModel = new CategoryModel();
$categories = $categoryModel->fetchCategories();
echo json_encode($categories);
