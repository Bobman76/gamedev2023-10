<?php 
$myCheck = 1; 
$myNumCheck = 1;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submitTextForm'])) {
        // Process text form
        $myInputText01 = $_POST['myText01']; 

        if ($myInputText01 == 'fred' || $myInputText01 == 'Fred' || $myInputText01 == 'Joe' || $myInputText01 == 'Your Mom') { 
            $myCheck = 2;
        } else {
            $myCheck = 3;
        }
    }

    if (isset($_POST['submitNumberForm'])) {
        // Process number form
        $myinputNumber01 = $_POST['myNumber'];

        if ($myinputNumber01 == 2 || $myinputNumber01 == 3 || $myinputNumber01 == 4 || $myinputNumber01 == 5) {
            $myNumCheck = 2; 
        } else {
            $myNumCheck = 3;
        }
    }
}
?>

<!DOCTYPE html> 
<html> 
<head> 
    <title>Browser Title</title>
</head>
<body>
    <h3 align="center">T2A06-pho-codesandbox</h3>
    <p><i> I have many Ifs in this code </i></p>

    <!-- Text Form -->
    <form action="index.php" method="post">
        <label for="myText01">Enter Text:</label>
        <input type="text" id="myText01" name="myText01"> 
        <input type="submit" name="submitTextForm" value="Submit Text Form">
    </form>

    <!-- Number Form -->
    <form action="index.php" method="post">
        <label for="myNumber">Enter Number:</label>
        <input type="number" id="myNumber" name="myNumber" required>
        <input type="submit" name="submitNumberForm" value="Submit Number Form">
    </form>

    <?php 
    echo "<span style='color:red'>Find the Magic word</span><br>";
    echo "<span style='color:red'>Find the Magic number</span><br>";
    if ($myCheck == 2 && $myNumCheck == 1) {
        echo "<span style='color:green'>Cool!</span>";
    } 
    elseif ($myCheck == 3 && $myNumCheck == 1) {
        echo "<span style='color:red'>NO! WRONG!</span>";
    } 
    if ($myNumCheck == 2 && $myCheck == 1) {
        echo "<span style='color:green'>Magic Num</span>";
    } 
    elseif ($myNumCheck == 3 && $myCheck == 1) {
        echo "<span style='color:red'>Unmagic Num</span>";
    }
    ?>
</body>
</html>
