function idCard() {
  //get reference to DOM elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var idAge = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var idAddress = document.getElementById("address").value;

  var fullName = firstName + " " + lastName;

  document.getElementById("postAddress").innerHTML = idAddress;
  document.getElementById("postAge").innerHTML = idAge;
  document.getElementById("postPhoneNumber").innerHTML = phoneNumber;
  document.getElementById("postFullName").innerHTML = fullName;

  // var idAges = [100, 9000];
  //idAges.push(idAge);

  //for (var i = 0; i < idAges.length; i++) {
  //if (parseInt(idAges[i]) < 100) {
  //idAgeOutput.innerHTML = idAges[i];
  //}
  //}
}
