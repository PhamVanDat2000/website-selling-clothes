<?php
class Product
{
    // Product properties
    public $id;
    public $title;
    public $price;
    public $description;
    public $status;
    public $images_url;


    // constructor
    public function __construct($id, $title, $price, $description, $status)
    {
        $this->id = $id;
        $this->title = $title;
        $this->price = $price;
        $this->description = $description;
        $this->status = $status;
        $this->images_url = [];
    }

    public function addImageUrl($url)
    {
        array_push($this->images_url, $url);
    }
}
