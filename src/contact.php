<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'mogavero.daniele@gmail.com';
$subject = 'Message from corptape.com '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        alert('Grazie per il messaggio, Ti ricontatteremo il prima possibile');
        window.location = 'contacts.html';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        alert('Non è stato possibile inviare il messaggio, ti preghiamo di mandare un email a info@corptape.com');
        window.location = 'contacts.html';
    </script>
<?php
}
?>