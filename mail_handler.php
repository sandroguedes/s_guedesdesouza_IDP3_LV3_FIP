<?php
    // PHP code adapted from a youtube tutorial from the YouTube Channel DCodeMania at "https://www.youtube.com/watch?v=hl6ebKO_EKs"
    if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['mail'];
		$phone=$_POST['phone'];
		$msg=$_POST['message'];

		$to='sandro.guedes@live.com';
		$subject='SGS_Design';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

        if(mail($to, $subject, $message, $headers)){
            header("Location: ./thankyou.html");
		}
		else{
            header("Location: ./error.html");
        }
	}
?>
        
<!-- if(mail($to, $subject, $message, $headers)){
echo "<h2>Sent Successfully! Thank you"." ".$name.", I will get back to you shortly!</h2>";
}else{
echo "Something went wrong!";} -->