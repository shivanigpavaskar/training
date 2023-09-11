<?php
$FileName=$_FILES['files']['name'];
$TmpName=$_FILES['files']['tmp_name'];

move_uploaded_file($TmpName,$FileName);
echo("File Uploaded Successfully");

?>