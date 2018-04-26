<?if(isset($_POST["submit_tel"])) 
{
$email = 'alin4eg10@gmail.com';
/* Отправляем email */
mail($email, "Заказ обратного звонка на сайте ...", "\n
Посетитель заказал обратный звонок! \n
Телефон : ".$_POST['tel']."
");
echo 'Заявка принята!';
}
?>