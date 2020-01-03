<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    // echo $_POST;
    $x =  $_POST;
    echo json_encode($x);
    // echo $_POST['emailId'];
    // echo $_POST['companyName'];
    if ($_POST['firstName']){
    
    	$to = 'shribalajielectricals63@gmail.com';
      $subject = $_POST['companyName'];
      $message = 'Hello Shree Balaji Electricals,' . '<br><br> You got an request from '.$_POST['firstName'] .' '.$_POST['lastName'].'<br><b>Company Name:</b> '.$_POST['companyName'].'<br><b>Requirements:</b> '. $_POST['requirement'] .'<br><b>Address:</b> '.$_POST['address'].'<br><b>Mobile Number:</b> '.$_POST['mobileNumber'].'<br> <b>Email Id:</b> '.$_POST['emailId'];
      
      $header = "From:shhribalajielectricals@gmail.com \r\n";
      $header .= "Cc:ahujap63@yahoo.com \r\n";
      $header .= "MIME-Version: 1.0\r\n";
      $header .= "Content-type: text/html\r\n";


      $tocustomer = $_POST['emailId'];
      $subjectcustomer = $_POST['companyName'];
      $messagecustomer = 'Dear '.$_POST['firstName']. ' '. $_POST['lastName'] . ','  . "<br><br> We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible. <br>Talk to you soon," . ' </b><br><br>Regards,<br>Team Shree Balaji Electricals, <br> Call us : +91-9810186920 <br> Email-id : shhribalajielectricals@gmail.com';
      
      $headercustomer = "From:shhribalajielectricals@gmail.com \r\n";
      $headercustomer .= "Cc:ahujap63@yahoo.com \r\n";
      $headercustomer .= "MIME-Version: 1.0\r\n";
      $headercustomer .= "Content-type: text/html\r\n";
      
      mail($tocustomer,$subjectcustomer,$messagecustomer,$headercustomer);
      $retval = mail($to,$subject,$message,$header);
      
      if( $retval == true ) {
         echo "Message sent successfully.";
      }else {
         echo "Message could not be sent.";
      }
    	
    }else{
    	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}
?>