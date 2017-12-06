<?php
    header("Content-type: text/html;charset=utf8");
   
    $phone=$_POST['phone'];
    $password=$_POST['password'];
    $mysqli=new Mysqli('localhost','root','root','dth');
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    $sql="INSERT INTO register (phone,password) VALUES('{$phone}','{$password}')";
    $result=$mysqli->query($sql);
    if($result){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
