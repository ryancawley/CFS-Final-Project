function idCard() {
  //get reference to DOM elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var idAge = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var idAddress = document.getElementById("address").value;

  var fullName = firstName + " " + lastName;

  document.getElementById("postAddress").innerHTML = idAddress;

  document.getElementById("postPhoneNumber").innerHTML = phoneNumber;
  document.getElementById("postFullName").innerHTML = fullName;

  var numberArray = [];
  numberArray.push(idAge, phoneNumber);

  for (var i = 0; i < idAge.length; i++) {
    if (parseInt(idAge[i]) < 100) {
      document.getElementById("postAge").innerHTML = "Age: " + idAge;
      if (parseInt(phoneNumber[i]) > 100) {
        document.getElementById("postPhoneNumber").innerHTML =
          "Phone Number: " + phoneNumber;
      }
    }
  }
}
