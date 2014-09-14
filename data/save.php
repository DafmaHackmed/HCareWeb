<?php

	$var1 = $_GET['var1'];
	$var2 = $_GET['var2'];
	$var3 = $_GET['var3'];
	$var4 = $_GET['var4'];
	$var5 = $_GET['var5'];
	$var6 = $_GET['var6'];
	
	$my_file = 'data.txt';
	unlink($my_file);
	$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	$data = $var1 . "," . $var2 . "," . $var3 . "," . $var4 . "," . $var5 . "," . $var6 .",9";
	fwrite($handle, $data);
?>