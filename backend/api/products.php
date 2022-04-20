<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers");

include_once __DIR__ . '/../models/ProductModel.php';

$productModel = new ProductModel();

if (isset($_GET['id'])) {
    $product = $productModel->fetchProductById($_GET['id']);
    echo json_encode($product);
} elseif (isset($_GET['cat_id'])) {
    $products = $productModel->fetchProductsByCategoryId($_GET['cat_id']);
    echo json_encode($products);
} elseif (isset($_GET['keyword'])) {
    $products = $productModel->fetchProductsByKeyWord($_GET['keyword']);
    echo json_encode($products);
} else {
    $products = $productModel->fetchAllProducts();
    echo json_encode($products);
}
