<html>
<head>
    <title>Cat Antics</title>
    <style>
        body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            background-image: url("");
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    </style>
</head>
<body>
    <input type="button" value="click" onclick="myPrint(true)">
    <script>
        let myOutArray = [];

        function myPrint(isTrue) {
            if (isTrue) {
                let x = parseInt(prompt("How old is the cat?: "));
                let myAnimal;
                for (let i = 1; i <= x; i++) {
                    myAnimal = 'cat';
                    if (i <= 4) {
                        myAnimal = 'kitten';
                    } else if (i >= 40) {
                        myAnimal = 'Immortal cat';
                    }

                    myOutArray[i] = 'My ' + myAnimal + ' is ' + i + ' years old <br>';
                    document.write(myOutArray[i]);
                }
            } else {
                document.write("Button not clicked.");
            }
        }
    </script>
</body>
</html>
