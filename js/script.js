$(document).ready(function () {
  $("#book-btn").click(function () {
    var id = document.getElementById("patientId").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("pickDate").value;
    var numService = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var specialist = document.getElementById("specialistSelect").value;
    var newPatient =
      "<tr><td>" +
      1 +
      "</td><td>" +
      id +
      "</td><td>" +
      password +
      "</td><td>" +
      date +
      "</td><td>" +
      numService.length * 500000 +
      "</td><td>" +
      specialist +
      "</td></tr>";
    document.querySelector(".table").innerHTML += newPatient;
  });
});
