<?php

	$phone=$_POST['phone'];
	$mqsqli=new Mysqli('localhost','root','root','dth');
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	$sql="SELECT Id FROM register WHERE phone='{$phone}'";
	$result=$mqsqli->query($sql);
	if(mysqli_num_rows($result)){
		echo "false";
	}else{
		echo "true";
	}