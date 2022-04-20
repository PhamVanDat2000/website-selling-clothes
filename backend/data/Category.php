<?php
class Category
{
    // Category properties
    public $id;
    public $title;


    // constructor
    public function __construct($id, $title)
    {
        $this->id = $id;
        $this->title = $title;
    }
}
