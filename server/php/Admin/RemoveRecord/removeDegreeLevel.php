<?php
  include("../../connect.php");
  $fid = $_POST["fid"];
  $id = $_POST["id"];
  
  $removeDegreeLevel = "DELETE FROM degree_level WHERE id = '$id'";
  mysql_query($removeDegreeLevel);
  
?> 