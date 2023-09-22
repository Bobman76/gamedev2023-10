  let myOutArray = new Array();
x = 20;

  function myPrint(x) {
    let myAnimal;
    for (let i = 1; i <= x; i++) {
      myAnimal = 'cat';
      if (i <= 4) {
        myAnimal = 'kitten';
      }
      Else {
        myAnimal = 'cat'; 
      } 
      If(1 <= 12) 
      { 
        myAnimal = 'long cat';

      }
      myOutArray[i] = 'My' + myAnimal + ' is ' + i + ' years old <br>';
    }
    document.write(myOutArray[1] + myOutArray[2]);
  }

