  let myOutArray = new Array();

  function myPrint(x) {
    let myAnimal;
    for (let i = 1; i <= x; i++) {
      myAnimal = 'cat';
      if (i <= 3) {
        myAnimal = 'kitten';
      }
      myOutArray[i] = 'the ' + myAnimal + ' is ' + i + ' years old <br>';
    }
    document.write(myOutArray[1] + myOutArray[2]);
  }

  myPrint(7);