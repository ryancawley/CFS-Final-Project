function idCard() {
  //get reference to DOM elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var idAge = document.getElementById("age");

  var firstNameOutput = document.getElementById("petNameOutput");
  var lastNameOutput = document.getElementById("lastNameOutput");
  var idAgeOutput = document.getElementById("idAgeOutput");
}

//Define Full Name
alert(fullName.value);

fullNameOutput.innerHTML = firstName + lastName;

//[0], [1]

var idAges = [100, 9000];
idAges.push(idAge);

for (var i = 0; i < idAges.length; i++) {
  if (parseInt(idAges[i]) < 100) {
    idAgeOutput.innerHTML = idAges[i];
  }
}
