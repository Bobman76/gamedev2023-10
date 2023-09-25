let myOutArray = [];
let x = parseInt(prompt("How old is the cat?: "));
alert("This checks if you've inputted a number or not and allows you to have the cat go on for you're chosen amount of years'); 
if (Number.isInteger(x)) {
  function myPrint(x) {
    let myAnimal;
    for (let i = 1; i <= x; i++) {
      myAnimal = 'cat';
      if (i <= 4) {
        myAnimal = 'kitten';
      } else if (i >= 12) {
        myAnimal = 'Immortal cat';
      }

      myOutArray[i] = 'My ' + myAnimal + ' is ' + i + ' years old <br>';
      document.write(myOutArray[i]);
    }
  }
  myPrint(x);
} else {
  alert("Input a number!");
}
