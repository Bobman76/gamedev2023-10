let myOutArray = [];

function myPrint(x) {
  let myAnimal;
  for (let i = 1; i <= x; i++) {
    myAnimal = 'cat';
    if (i <= 4) {
      myAnimal = 'kitten';
    } else if (i <= 12) {
      myAnimal = 'long cat';
    }

    myOutArray[i] = 'My ' + myAnimal + ' is ' + i + ' years old <br>';
  }
  document.write(myOutArray[1] + myOutArray[2]);
}

let x = 20;
myPrint(x);
