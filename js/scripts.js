document.addEventListener("DOMContentLoaded", function(){
  console.log("js loaded");
});

  var allDigits = []
  var total = 0
  var equation = []
  var letter = document.getElementsByClassName("digit");
  var operator = document.getElementsByClassName("operator");

  //on click, push this.value into an array
  for(var i = 0; i< letter.length; i++){
    letter[i].addEventListener('click', function(e){
        allDigits.push(e.target.value);
        console.log("equation: "+ equation)
        console.log("alldigits: "+ allDigits)
  //join the ele from the arr to form string and append on UI
        if (total === 0){
        document.getElementById("total").innerHTML = allDigits.join("")
      } else {
        document.getElementById("total").innerHTML = total + allDigits.join("")

      }
    })
  };

function getTotal(){
  // combine the 2nd set of digits
  equation.push(allDigits.join(""))
  clearArr()

  //determine which operator was used
  for (var i = 0; i< equation.length; i++){
    if (equation[1]==="+"){
      total = parseInt(equation[0]) + parseInt(equation[2]);
      showTotal()
    } if (equation[1]==="-"){
      total = parseInt(equation[0]) - parseInt(equation[2]);
      showTotal()
    } if (equation[1]==="*"){
      total = parseInt(equation[0]) * parseInt(equation[2]);
      showTotal()
    } if (equation[1]==="/"){
      total = parseInt(equation[0]) / parseInt(equation[2]);
      showTotal()
    }
  }
}

  function showTotal(){
    document.getElementById("total").innerHTML = total
    document.getElementById("op").innerHTML = " "
    equation = []
    allDigits = [];
  }

  function clearArr(){
    allDigits = [];
  }


  for(var i = 0; i< operator.length; i++){
    operator[i].addEventListener('click', function(e){
      //Do nothing if there is no number before a operator
      if (allDigits[0] === operator[i]){
        console.log("do nothing")
      } if (equation.length === 2){
            getTotal();
            console.log("run get total")
          } else {
      //push the combined digits into an arr, followed by the operator
        allDigits.unshift(total);
        equation.push(allDigits.join(""))
        equation.push(e.target.value)
    //clear the digits arr since we have already combined the digis
        clearArr()
    //show which operator selected
        document.getElementById("op").innerHTML = e.target.value
      }
    })
  };
