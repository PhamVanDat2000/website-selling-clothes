<?php
class Database
{
    // DB Params
    private static $host = 'localhost';
    private static $db_name = 'ecom_store';
    private static $username = 'root';
    private static $password = '';


    public static function connect()
    {
        $conn = new mysqli(Database::$host, Database::$username, Database::$password, Database::$db_name);
        if ($conn->connect_error) {
            return false;
        }
        return $conn;
    }
}
