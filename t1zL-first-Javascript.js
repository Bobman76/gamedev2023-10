<!DOCTYPE html>
<html>
<head>
    <title>Cat Antics</title>
    <style>
        body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            background-image: url("data:image/jpeg;base64,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"); /* Provide a valid URL */
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    </style>
</head>
<body>
    <input type="button" value="click" onclick="myPrint(true)">
    <div id="output"></div>

    <script>
        let myOutArray = [];

        function myPrint(isTrue) {
            let output = document.getElementById('output');
            output.innerHTML = '';

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

                    myOutArray[i - 1] = 'My ' + myAnimal + ' is ' + i + ' years old <br>';
                    output.innerHTML += myOutArray[i - 1];
                }
            } else {
                output.innerHTML = "Button not clicked.";
            }
        }
    </script>
</body>
</html>
