<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $myInputText = $_POST['myText01'];

    if (strpos($myInputText, 'fred') !== false) {
        echo "The word 'fred' was found in the input.";
    } else {
        echo "The word 'fred' was not found in the input.";
    }
}
?>