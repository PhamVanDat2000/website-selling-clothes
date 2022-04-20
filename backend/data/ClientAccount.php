<?php
class ClientAccount
{
    // Order properties
    public $id;
    public $name;
    public $email;
    public $country;
    public $city;
    public $phone;
    public $address;


    // constructor
    public function __construct($id, $name, $email, $country, $city, $phone, $address)
    {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->country = $country;
        $this->address = $address;
        $this->city = $city;
    }
}
