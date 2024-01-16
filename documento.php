<?php

$nome = addcslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telephone = addslashes($_POST['telephone']);

$para = "isadoramariacarvalhal@gmail.com";
$assunto = "Vaga de emprego";

$corpo = "Nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "Telephone: " . $telephone;
$cabeca = "from: isadoramariacarvalhal@gmail.com" . "\n" . "Reply-to: " . $email . "\n" . "X-Mailer:PHP/" . phpversion();

if (mail($para, $assunto, $corpo, $cabeca)) {
    echo "Success!";
} else {
    echo "Error";
}
?>
