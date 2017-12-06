<?php

	$password=$_POST['password'];
	$mqsqli=new Mysqli('localhost','root','root','dth');
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	$sql="SELECT Id FROM register WHERE password='{$password}'";
	$result=$mqsqli->query($sql);
	if(mysqli_num_rows($result)){
		echo "false";
	}else{
		echo "true";
	}