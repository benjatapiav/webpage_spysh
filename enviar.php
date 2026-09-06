<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Acceso no permitido.");
}

$nombre = $_POST["nombre"] ?? "";
$apellido = $_POST["apellido"] ?? "";
$email = $_POST["email"] ?? "";
$comentarios = $_POST["comentarios"] ?? "";

$destinatario = "agencia@spysh.cl";

$asunto = "Nuevo mensaje desde la página web";

$mensaje = "Nombre: " . $nombre . "\n";
$mensaje .= "Apellido: " . $apellido . "\n";
$mensaje .= "Correo: " . $email . "\n\n";
$mensaje .= "Comentarios:\n";
$mensaje .= $comentarios;

$headers = "From: agencia@spysh.cl\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($destinatario, $asunto, $mensaje, $headers)) {
    echo "Mensaje enviado correctamente.";
} else {
    echo "No se pudo enviar el mensaje.";
}

?>