function idCard() {
  //get reference to DOM elements
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var idAddress = document.getElementById("idAddress").value;

  var fullName = firstName + " " + lastName;
  document.getElementById("postFullName").innerHTML = fullName;
  var idAddress = document.getElementById("postAddress");

  var idAges = [100, 9000];
  idAges.push(idAge);

  for (var i = 0; i < idAges.length; i++) {
    if (parseInt(idAges[i]) < 100) {
      idAgeOutput.innerHTML = idAges[i];
    }
  }
}
