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
?>
<!DOCTYPE html>
<head>
    <title>Sign Up Confirmation</title>
    <link rel="stylesheet" href="buyerdashboarddesign.css">
</head>
<body>
<div class="dashboard-container">
        <div class="property-list">
        <div class="property-card">
        <?php
        $hashedPassword=password_hash($_POST["password"],PASSWORD_DEFAULT );
        $sql= 'INSERT INTO User SET email ="'.$_POST["email"].'", username = "'.$_POST["username"].'", firstName = "'.$_POST["firstName"].'", lastName = "'.$_POST["lastName"].'",hashedpassword = "'.$hashedPassword.'", userType = "'.$_POST["userType"].'";';
        if ($conn->query($sql)==TRUE){
            print("<h4>Congrats! You Have Successfully Signed Up!</h4>");
            print("<p>You Can Now Log In By<br> <a href='login.html'> Clicking Here </a></p>");
        }
        else{
            echo 'Error inserting User: ' . $conn->error;
        }
        ?>
    </div></div></div>
    <?php
            $conn->close();
?>

</body>