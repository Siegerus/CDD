<?php
 
  const TOKEN = '7186163080:AAGV0O8m3lcC45tH1XJN4wcYXRoTrXLFygk';
 
  const CHATID = '-1002168294668';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['user']) && !empty($_POST['phone']) && !empty($_POST['social']) && !empty($_POST['review'])) {
     
    $txt = "Psycho_project%0AПользователь оставил отзыв!%0A%0A";
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя:" . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }

    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
      $txt .= "Телефон:" . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
  }
     
    if (isset($_POST['social']) && !empty($_POST['social'])) {
        $txt .= "Соц.сеть:" . strip_tags(urlencode($_POST['social'])) . "%0A";
    }

    if (isset($_POST['nickname']) && !empty($_POST['nickname'])) {
      $txt .= "Никнейм:" . strip_tags(urlencode($_POST['nickname'])) . "%0A";
    }

    if (isset($_POST['review']) && !empty($_POST['review'])) {
      $txt .= "Отзыв:" . strip_tags(urlencode($_POST['review'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}