<?
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
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <?php
        $hashedPassword=password_hash($_POST["password"],PASSWORD_DEFAULT );
        $sql= 'INSERT INTO User SET email ="'.$_POST["email"].'", username = "'.$_POST["username"].'", firstName = "'.$_POST["firstName"].'", lastName = "'.$_POST["lastName"].'",hashedpassword = "'.$hashedPassword.'", userType = "'.$_POST["userType"].'";';
        if ($conn->query($sql)==TRUE){
            print("<span class='loginheader'>Congrats! You Have Successfully Signed Up</span>");
            print("<span class='clickhere'>You Can Now Log In By <a href='login.html'> Clicking Here </a></span>");
        }
        else{
            echo 'Error inserting User: ' . $conn->error;
        }
        ?>
    </div>
</body>