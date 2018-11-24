function idCard() {
  //get reference to DOM elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var idAge = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var idAddress = document.getElementById("address").value;

  var fullName = firstName + " " + lastName;

  document.getElementById("postAddress").innerHTML = idAddress;
  document.getElementById("postFullName").innerHTML = fullName;

  var numberArray = [];
  numberArray.push(idAge);
  numberArray.push(phoneNumber);

  for (var i = 0; i < numberArray.length; i++) {
    if (parseInt(numberArray[i]) < 100) {
      postAge.innerHTML = "Age: " + numberArray[i];
    } else if (parseInt(numberArray[i]) > 100) {
      postPhoneNumber.innerHTML = "Phone Number: " + numberArray[i];
    }
  }
}
