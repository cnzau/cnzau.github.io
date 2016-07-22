<?php

if (isset($_POST['sender_email'])){
	$sender_name=$_POST['sender_name'];
	$sender_email=$_POST['sender_email'];
	$message=$_POST['message'];
        
        $to= "clement.nzau@gmail.com";
        $subject= "Website Contact";
	
	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: $sender_name <$sender_email>";
	$headers[] = "Reply-To: Recipient Name <$sender_email>";
	//$headers[] = "Subject: {$subject}";
	$headers[] = "X-Mailer: PHP/".phpversion();

	@mail($to, $subject, $message, implode("\r\n", $headers));
}
header('location:https://cnzau.github.io/');
echo '<script type="text/javascript">'
   , 'alert("message successfully sent");'
   , '</script>'
;

?>