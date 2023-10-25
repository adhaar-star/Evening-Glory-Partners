<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

require_once "vendor/autoload.php"; //PHPMailer Object 
use PHPMailer\PHPMailer\PHPMailer;


$mail = new PHPMailer(true); //From email address and name 
$mail->From = "adh171991@gmail.com"; 
$mail->FromName = "Adhaar Jaiswal"; //To address and name 
$mail->addAddress("malename909@gmail.com", "Test User1");//Recipient name is optional
$mail->addAddress("adharjswl@yahoo.com"); //Address to which recipient will reply 
$mail->addReplyTo("adh171991@gmail.com", "Reply"); //CC and BCC 
//$mail->addCC("malename909@gmail.com"); 
//$mail->addBCC("adharjswl@yahoo.com"); //Send HTML or Plain Text email 
$mail->IsSMTP(); 
$mail->SMTPDebug = 4; //from 1 to 4 to get more details.
$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
$mail->Port = 587; // or 587
$mail->Host = "smtp.gmail.com";
$mail->Username = "adh171991@gmail.com";
$mail->Password = "wcgspndgvcxjhnht";
$mail->isHTML(true); 
$mail->Subject = "Subject Text"; 
$mail->Body = "<i>Updated Mail body in HTML</i>";
$mail->AltBody = "This is the plain text version of the email content"; 

if(!$mail->send()) 
{
echo "Mailer Error: " . $mail->ErrorInfo; 
} 
else { echo "Message has been sent successfully"; 
}


?>