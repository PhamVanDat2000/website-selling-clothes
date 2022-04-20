<?php
include_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../data/ClientAccount.php';
include_once __DIR__ . '/../models/AuthModel.php';

class ProfileModel
{
    // DB stuff
    private $conn;
    private $client_account_table_name = 'customers';

    // constructor
    public function __construct()
    {
        $this->conn = Database::connect();
    }


    // get client profile
    public function fetchProfile($account_id, $auth_token)
    {
        $authModel = new AuthModel();
        $verifyAuthTokenResult = $authModel->verifyAuthToken($account_id, $auth_token);
        if (!isset($verifyAuthTokenResult['Status'])) {
            return array("Status" => "Error", "Message" => "Fetch profile failed");
        } elseif ($verifyAuthTokenResult['Status'] != "Valid") {
            return array("Status" => "Error", "Message" => "Fetch profile failed. " . $verifyAuthTokenResult['Message']);
        }
        $query = "SELECT *
        FROM {$this->client_account_table_name}
        WHERE customer_id = $account_id
        LIMIT 1";
        $result = $this->conn->query($query);
        if ($result == false) {
            return array("Status" => "Error", "Message" => "Fetch profile failed!");
        } elseif ($result->num_rows == 0) {
            return array("Status" => "Error", "Message" => "Account Id doesn't exist");
        } else {
            $row = $result->fetch_assoc();
            $clientAccount = new ClientAccount($row['customer_id'], $row['customer_name'], $row['customer_email'], $row['customer_country'], $row['customer_city'], $row['customer_contact'], $row['customer_address']);
            return array("Status" => "Success", "Message" => "Fetch profile successfully!", "Info" => $clientAccount);
        }
    }

    // update client profile
    public function updateProfile($account_id, $auth_token, $newName, $newPhone, $newAddress, $newCountry, $newCity)
    {
        $authModel = new AuthModel();
        $verifyAuthTokenResult = $authModel->verifyAuthToken($account_id, $auth_token);
        if (!isset($verifyAuthTokenResult['Status'])) {
            return array("Status" => "Error", "Message" => "Update profile failed");
        } elseif ($verifyAuthTokenResult['Status'] != "Valid") {
            return array("Status" => "Error", "Message" => "Update profile failed. " . $verifyAuthTokenResult['Message']);
        }
        $query = "UPDATE {$this->client_account_table_name}
        SET customer_name='$newName', customer_contact='$newPhone', customer_address='$newAddress', customer_country='$newCountry', customer_city='$newCity'
        WHERE customer_id = $account_id";
        $result = $this->conn->query($query);
        if ($result == false) {
            $error = mysqli_error($this->conn);
            return array("Status" => "Error", "Message" => "Update profile failed. $error");
        } else {
            return array("Status" => "Success", "Message" => "Update profile successfully.");
        }
    }

    // change password
    public function changePassword($account_id, $old_pw, $new_pw, $confirm_pw)
    {
        if ($new_pw != $confirm_pw) {
            return array("Status" => "Error", "Message" => "Change password failed!. Confirm Password doesn't match New Password");
        }
        $query = "SELECT *
        FROM {$this->client_account_table_name}
        WHERE customer_id = $account_id
        LIMIT 1";
        $result = $this->conn->query($query);
        if ($result == false) {
            return array("Status" => "Error", "Message" => "Change password failed!.");
        } elseif ($result->num_rows == 0) {
            return array("Status" => "Error", "Message" => "Change password failed!. Account Id doesn't exist");
        } else {
            $row = $result->fetch_assoc();
            $hashed_pw = $row['customer_pass'];
            if (password_verify($old_pw, $hashed_pw)) {
                // update hash password
                $new_hashed_pw = password_hash($new_pw, PASSWORD_DEFAULT);
                $query = "UPDATE {$this->client_account_table_name}
                SET customer_pass = '$new_hashed_pw'
                WHERE customer_id = $account_id";
                $result = $this->conn->query($query);

                if ($result == true) {
                    $authModel = new AuthModel();
                    $authModel->invalidateOldAuthToken($account_id);
                    $auth_token = $authModel->createNewAuthToken($account_id, $new_pw);
                    if ($auth_token != null) {
                        return array("Status" => "Success", "Message" => "Change password successfully!", "auth_token" => $auth_token);
                    } else {
                        return array("Status" => "Error", "Message" => "Change password failed!. Error when create auth token");
                    }
                } else {
                    $error = mysqli_error($this->conn);
                    return array("Status" => "Error", "Message" => "Change password failed!. Error when update password $error ");
                }
            } else {
                return array("Status" => "Error", "Message" => "Change password failed!. Incorrect password!");
            }
        }
    }

    public function __destruct()
    {
        $this->conn->close();
    }
}
