<?php
$host = "localhost";
$user = "gfelton2";
$pass = "gfelton2";
$dbname = "gfelton2";

$conn = new mysqli($host,$user,$pass,$dbname);
if($conn->connect_error) {
    echo "Could not connect to server \n";
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT hashedPassword FROM User WHERE email = '".$_POST['email']."';";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
    <head>
        <title>Login Confirm</title>
        <link rel="stylesheet" href="style.css">
 
    </head>
    <body>
        <span id="passwordCheck" class="
            <?php
        if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $acc=password_verify($_POST['password'],$row['hashedPassword']);
        if($acc){
            echo "./buyerdashboard.html";
        } 
        else{
            echo "./loginretry.html";
        }
    }
} else {
    echo "./loginretry.html";
}
?>
"></span>
<script src="loginconfirm.js" defer></script>
    </body>
