<?php

header("Content-Type: application/json; charset=UTF-8");

/*
 * Función para responder siempre en formato JSON.
 */
function responder($ok, $mensaje, $codigo = 200)
{
    http_response_code($codigo);

    echo json_encode([
        "ok" => $ok,
        "mensaje" => $mensaje
    ]);

    exit;
}


/*
 * Permitir solamente solicitudes POST.
 */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Allow: POST");

    responder(
        false,
        "Método no permitido.",
        405
    );
}


/*
 * Recibir y limpiar los campos.
 */
$nombre = trim($_POST["nombre"] ?? "");
$apellido = trim($_POST["apellido"] ?? "");
$email = trim($_POST["email"] ?? "");
$comentarios = trim($_POST["comentarios"] ?? "");


/*
 * Comprobar que no existan campos vacíos.
 */
if (
    $nombre === "" ||
    $apellido === "" ||
    $email === "" ||
    $comentarios === ""
) {
    responder(
        false,
        "Por favor, completa todos los campos.",
        400
    );
}


/*
 * Validar el correo.
 */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(
        false,
        "Ingresa un correo electrónico válido.",
        400
    );
}


/*
 * Evitar caracteres que puedan alterar
 * los encabezados del correo.
 */
$emailSeguro = str_replace(
    ["\r", "\n"],
    "",
    $email
);


/*
 * Configuración del correo.
 */
$destinatario = "agencia@spysh.cl";
$asunto = "Nuevo mensaje desde la página web";

$mensaje = "Nombre: " . $nombre . "\n";
$mensaje .= "Apellido: " . $apellido . "\n";
$mensaje .= "Correo: " . $emailSeguro . "\n\n";
$mensaje .= "Comentarios:\n";
$mensaje .= $comentarios;


/*
 * Encabezados.
 */
$headers = "From: agencia@spysh.cl\r\n";
$headers .= "Reply-To: " . $emailSeguro . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


/*
 * Intentar entregar el correo al servidor.
 */
$enviado = mail(
    $destinatario,
    $asunto,
    $mensaje,
    $headers
);


if ($enviado) {
    responder(
        true,
        "Mensaje enviado correctamente."
    );
}

responder(
    false,
    "No fue posible enviar el mensaje. Inténtalo nuevamente.",
    500
);