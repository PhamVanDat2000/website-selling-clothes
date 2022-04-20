<?php
class Order
{
    // Order properties
    public $order_id;
    public $client_name;
    public $client_address;
    public $created_date;
    public $products;
    public $status;


    // constructor
    public function __construct($id, $client_name, $client_address, $created_date)
    {
        $this->order_id = $id;
        $this->client_name = $client_name;
        $this->client_address = $client_address;
        $this->created_date = $created_date;
        $this->products = array();
    }

    public function addProduct($product, $quantity)
    {
        array_push($this->products, array("product" => $product, "quantity" => $quantity));
    }
}
