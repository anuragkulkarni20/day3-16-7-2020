/*function printOdd(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  function printEven(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }*/

  function odd_even(){
    var no;
    no=Number(document.getElementById("no_input").value);
    if(no%2==0)
    {
    alert("Even Number");
    }
    else
    {
    alert("Odd Number");
    }
    }

  /*let num = +prompt('Enter the number to check odd or even');
  let ans = num%2 === 0 ? 'Even' : 'Odd';
  console.log(`The number enetered is ${num} and Number is ${ans}` );*/