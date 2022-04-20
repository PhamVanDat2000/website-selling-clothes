<?php
include_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../data/Product.php';
class ProductModel
{
    // DB stuff
    private $conn;
    private $products_table_name = 'products';
    private $product_images_table_name = 'product_images';
    private $product_category_table_name = 'product_category';

    // constructor
    public function __construct()
    {
        $this->conn = Database::connect();
    }

    // process and return a array of Product object.
    private function processProductsQueryResult($result)
    {
        $products = [];
        while ($row = $result->fetch_assoc()) {
            $product = new Product($row['product_id'], $row['product_title'], $row['product_price'], $row['product_desc'], $row['status']);
            $product->addImageUrl($row['product_img1']);
            $product->addImageUrl($row['product_img2']);
            $product->addImageUrl($row['product_img3']);
            array_push($products, $product);
        }
        return $products;
    }

    // fetch all products
    public function fetchAllProducts()
    {
        // query statement
        $query = "SELECT p.product_id, p.product_title, p.product_price, p.product_desc, p.status, p.product_img1, p.product_img2, p.product_img3
        FROM {$this->products_table_name} as p";

        $result = $this->conn->query($query);

        if ($result == FALSE || $result->num_rows == 0) {
            return null;
        }

        return $this->processProductsQueryResult($result);
    }

    // fetch product by id 
    public function fetchProductById($pid)
    {
        //get product info
        $query = "SELECT p.product_id, p.product_title, p.product_price, p.product_desc, p.status, p.product_img1, p.product_img2, p.product_img3
        FROM {$this->products_table_name} as p
        WHERE p.product_id = {$pid}";
        $result = $this->conn->query($query);
        if ($result->num_rows == 0) {
            return null;
        }
        $row = $result->fetch_assoc();
        $product = new Product($row['product_id'], $row['product_title'], $row['product_price'], $row['product_desc'], $row['status']);
        $product->addImageUrl($row['product_img1']);
        $product->addImageUrl($row['product_img2']);
        $product->addImageUrl($row['product_img3']);

        return $product;
    }

    // fetch products by category id
    public function fetchProductsByCategoryId($category_id)
    {
        // query statement
        $query = "SELECT p.product_id, p.product_title, p.product_price, p.product_desc, p.status, p.product_img1, p.product_img2, p.product_img3
        FROM {$this->products_table_name} as p 
        WHERE p.cat_id = $category_id";

        $result = $this->conn->query($query);

        if ($result == FALSE || $result->num_rows == 0) {
            return null;
        }

        return $this->processProductsQueryResult($result);
    }


    // fetch products by keyword
    public function fetchProductsByKeyWord($keyword)
    {
        // query statement
        $query = "SELECT p.product_id, p.product_title, p.product_price, p.product_desc, p.status, p.product_img1, p.product_img2, p.product_img3
        FROM products as p 
        WHERE p.product_title LIKE '%$keyword%'";

        $result = $this->conn->query($query);

        if ($result == FALSE || $result->num_rows == 0) {
            return null;
        }

        return $this->processProductsQueryResult($result);
    }



    public function __destruct()
    {
        $this->conn->close();
    }
}
