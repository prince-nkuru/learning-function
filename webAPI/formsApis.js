// checkValidity()	Returns true if an input element contains valid data.
// setCustomValidity()	Sets the validationMessage property of an input element.
//<input id="id1" type="number" min="100" max="300" required>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage; // Value must be greater than or equal to 100.
  }else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
}