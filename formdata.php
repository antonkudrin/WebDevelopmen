<?php
$result = mail ("user@website.com","Получен Комментарий с сайта","
    \nC сайта было получено Сообщения:
	\nИмя: $_POST['contactName']
	\nФамилия: $_POST['contaScurname']
	\nПочта: $_POST['contacEmail']
	\nТелефон: $_POST['contacTel']
	\nСообщение: $_POST['contacMesege']");
if ($result) {
	echo "<p>Сообщение отправлено успешно!</p>";
}

else{
	echo "<p>Сообщение не отправлено!</p>";
}
?>