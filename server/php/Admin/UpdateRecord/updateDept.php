<?php
  include("../../connect.php");
  $fid = $_POST["fid"];
  $dept_code = strtoupper($_POST["dept_code"]);
  $dept_name = ucwords($_POST["dept_name"]);
  $id = $_POST["id"];
   
  $update_department = mysql_query("UPDATE department SET dept_code = '$dept_code', dept_name = '$dept_name'
							        WHERE id = '$id'");  
?> 