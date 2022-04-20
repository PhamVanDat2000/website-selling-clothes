<?php
include_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../data/ClientAccount.php';

class AuthModel
{
    // DB stuff
    private $conn;
    private $client_account_table_name = 'customers';
    private $auth_tokens_table_name = 'auth_tokens';

    // constructor
    public function __construct()
    {
        $this->conn = Database::connect();
    }

    // create new client account 
    public function signUp($accountData)
    {
        $hashed_pw = password_hash($accountData['password'], PASSWORD_DEFAULT);
        $query = "INSERT INTO {$this->client_account_table_name}
        VALUES(DEFAULT,'{$accountData['name']}','{$accountData['email']}','$hashed_pw','{$accountData['country']}','{$accountData['city']}','{$accountData['phone']}','{$accountData['address']}','','','')";
        $result = $this->conn->query($query);
        if ($result == false) {
            $err_msg = mysqli_error($this->conn);
            return array("Status" => "Error", "Message" => "$err_msg");
        }
        return array("Status" => "Success", "Message" => "Created new client account successfully!");
    }

    // client sign in
    public function signIn($email, $pw)
    {
        $query = "SELECT * FROM {$this->client_account_table_name} as ca
        WHERE ca.customer_email = '$email' 
        LIMIT 1";
        $result = $this->conn->query($query);
        if ($result == false) {
            return array("Status" => "Error", "Message" => "Login failed!");
        } elseif ($result->num_rows == 0) {
            return array("Status" => "Error", "Message" => "Email doesn't exist");
        } else {
            $row = $result->fetch_assoc();
            $hashed_pw = $row['customer_pass'];
            $clientAccount = new ClientAccount($row['customer_id'], $row['customer_name'], $row['customer_email'], $row['customer_country'], $row['customer_city'], $row['customer_contact'], $row['customer_address']);
            if (password_verify($pw, $hashed_pw)) {
                $auth_token = $this->createNewAuthToken($row['customer_id'], $pw);
                if ($auth_token != null) {
                    return array("Status" => "Success", "Message" => "Login successfully!", "Info" => $clientAccount, "auth_token" => $auth_token);
                } else {
                    return array("Status" => "Error", "Message" => "Error when create auth token");
                }
            } else {
                return array("Status" => "Error", "Message" => "Incorrect password!");
            }
        }
    }


    public function signOut($account_id, $auth_token)
    {
        $verifyAuthTokenResult = $this->verifyAuthToken($account_id, $auth_token);
        if (!isset($verifyAuthTokenResult['Status'])) {
            return array("Status" => "Error", "Message" => "Logout failed");
        } elseif ($verifyAuthTokenResult['Status'] != "Valid") {
            return array("Status" => "Error", "Message" => "Logout failed. " . $verifyAuthTokenResult['Message']);
        }
        $newExpireTimestamp = time() - 3600;
        $query = "UPDATE {$this->auth_tokens_table_name}
        SET expire_at = $newExpireTimestamp
        WHERE account_id=$account_id AND token='$auth_token'";
        $result = $this->conn->query($query);
        if ($result == false) {
            $error = mysqli_error($this->conn);
            return array("Status" => "Error", "Message" => "Log out failed. $error");
        } elseif (mysqli_affected_rows($this->conn) == 0) {
            return array("Status" => "Error", "Message" => "Log out failed. Auth info invalid");
        } else {
            return array("Status" => "Success", "Message" => "Log out successfully");
        }
    }

    // create a auth token
    public function createNewAuthToken($account_id, $pw)
    {
        $token = hash("sha256", (string)time() . $pw);
        $expire_at = time() + 7 * 24 * 60 * 60;
        $query = "INSERT INTO {$this->auth_tokens_table_name}
        VALUES('{$token}',$account_id,{$expire_at})";
        $result = $this->conn->query($query);
        if ($result == false) {
            return null;
        } else {
            return array("auth_token" => $token, "expire_at" => $expire_at);
        }
    }

    // verify auth token
    public function verifyAuthToken($account_id, $token)
    {
        $query = "SELECT *
        FROM {$this->auth_tokens_table_name} AS at
        WHERE at.account_id = $account_id AND at.token='$token'
        LIMIT 1";
        $result = $this->conn->query($query);
        if ($result == false) {
            return array("Status" => "Error", "Message" => "Error while verifying token");
        } elseif ($result->num_rows == 0) {
            return array("Status" => "Invalid", "Message" => "Invalid token");
        } else {
            $row = $result->fetch_assoc();
            if ((int)$row['expire_at'] < time()) {
                return array("Status" => "Expired", "Message" => "Expried token");
            } else {
                return array("Status" => "Valid", "Message" => "Valid token");
            }
        }
    }

    public function invalidateOldAuthToken($account_id)
    {
        $newTimestamp = time() - 3600;
        $query = "UPDATE {$this->auth_tokens_table_name}
        SET expire_at = $newTimestamp
        WHERE account_id = $account_id";
        $result = $this->conn->query($query);
        return $result;
    }

    public function __destruct()
    {
        $this->conn->close();
    }
}
