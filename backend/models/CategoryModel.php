<?php
include_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../data/Category.php';
class CategoryModel
{
    // DB stuff
    private $conn;
    private $categories_table_name = 'categories';

    // constructor
    public function __construct()
    {
        $this->conn = Database::connect();
    }

    // read posts
    public function fetchCategories()
    {
        // query statement
        $query = "SELECT * FROM {$this->categories_table_name}";
        $result = $this->conn->query($query);
        $categories = [];
        while ($row = $result->fetch_assoc()) {
            $category = new Category($row['cat_id'], $row['cat_title']);
            array_push($categories, $category);
        }
        return $categories;
    }

    public function __destruct()
    {
        $this->conn->close();
    }
}
