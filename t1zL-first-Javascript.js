let myOutArray = [];
let x = parseInt(prompt("How old is the cat?: "));

function myPrint(x) {
  let myAnimal;
  for (let i = 1; i <= x; i++) {
    myAnimal = 'cat';
    if (i <= 4) {
      myAnimal = 'kitten';
    } else if (i >= 12) {
      myAnimal = 'long cat';
    }

    myOutArray[i] = 'My ' + myAnimal + ' is ' + i + ' years old <br>';
    document.write(myOutArray[i]);
  }
}

myPrint(x);
