<?php
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$to = 'sali.amedeo@gmail.com';
$subject = 'New Message From Your Website';
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "You have received a new message from $name ($email):\n\n$message";

if(mail($to, $subject, $body, $headers)) {
    echo 'Your message has been sent successfully!';
} else {
    echo 'There was a problem sending your message. Please try again.';
}
?>
