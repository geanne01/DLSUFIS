<?php
  include("../connect.php");
    if($_GET["fid"]!= NULL){ 
 	  $fid = $_GET["fid"];
  
      $select_otherOutput = mysql_query("SELECT p.pub_code AS id, f.flname, p.paper_title, p.paper_type, p.date_publication, p.remarks 
                                         FROM faculty f, publication p, publication_type pt
								         WHERE p.fid = $fid 
										 AND f.fid = p.fid 
										 AND p.pub_type = pt.pt_id
										 AND p.pub_type='PT010'
										 ORDER BY p.date_publication DESC ");
      $list_otherOutput = array();
      while($fetch_otherOutput = mysql_fetch_assoc($select_otherOutput)){
          $list_otherOutput[] = $fetch_otherOutput;
      }
      echo json_encode($list_otherOutput);
    }	
?>