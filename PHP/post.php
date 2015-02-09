<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
     // collect value of input field
     $name = $_POST['fname']; 
     if (empty($name)) {
         echo "Name is empty";
     } else {
         echo $name;
     }
}
?>
