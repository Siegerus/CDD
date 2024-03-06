<?php
session_start();
//print_r ($_POST);
unset($_SESSION['username_error']);
unset($_SESSION['email_error']);
unset($_SESSION['password_error']);
unset($_SESSION['success']);


$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];





if (strlen(trim($username)) <= 1) {
  $_SESSION['username_error'] = "Введите корректное имя";
header('LOCATION: enterreg.php');
}

else if (strlen(trim($email)) <= 1 || strpos($email, "@") == false) {
   $_SESSION['email_error'] = "Введите корректный email";
   header('LOCATION: enterreg.php');
 }

 else if ($password == "" ) {
   $_SESSION['password_error'] = "Введите пароль";
   header('LOCATION: enterreg.php');
 }
  else {
  //  $_SESSION['username_error'] = "";
  //  $_SESSION['email_error'] = "";
  //  $_SESSION['password_error'] = "";
    $_SESSION['success'] = "Вход выполнен";
    header('LOCATION: enterreg.php');
    //echo "<p>$username</p><p>$email</p><p>$password</p>";
  }
