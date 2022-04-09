function myFunction() {
    var firstInput = document.getElementById("first").value;
  
    if (firstInput.length >= 5) {
      console.log(firstInput);
      var number = document.getElementById("first").value;
      output = number.toString().match(/\d{1,4}/g);
      console.log(output);
      var firstForValue = output[0];
      console.log(firstForValue);
      var clr = (document.getElementById("first").value = "");
      document.getElementById("first").value = output[0];
      document.getElementById("second").value = output[1];
      document.getElementById("third").value = output[2];
      document.getElementById("fourth").value = output[3];
    }
    ////////////////////////////////////////////////////////
    document.getElementById("first").focus();
    if (firstInput.length === 4) {
      document.getElementById("second").focus();
     
    }
    var secondInput = document.getElementById("second").value;
    console.log(secondInput.length);
    if (secondInput.length === 4) {
      document.getElementById("third").focus();
      
    }
    var thirdInput = document.getElementById("third").value;
    if (thirdInput.length === 4) {
      document.getElementById("fourth").focus();
      
      var fourthInputDel = document.getElementById("fourth").value;
  
      if (fourthInputDel.length === 4) {
        
      }
    }
  }
  