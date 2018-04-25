function btnSkillsFunc (){

  var Name; var Age; var myForm;
  myForm = document.getElementById("initials");
  Name = myForm.elements["Name"].value;
  Age = myForm.elements["Age"].value;
  if (Name =="" && Age =="") {
    alert('Please Insert Your Name And Age');
  }

  else if (Age == "") {
    alert('You Must Insert Your Age');
  }

  else if (Name =="") {
    alert('Please Insert Your Name');
  }
  else{
    document.getElementById("theName").innerHTML = ' Hi ' +Name+ "You Are " +Age+"Years Old";
    document.getElementById('divSkills').style.display="block";
    document.body.style.backgroundColor ="red";
    }
  }

$(document).ready(function(){
    $("#languages").click(function(){
        $("#myEducation").hide();
        $("#English").toggle(1000).slideUp(1000).slideDown(1000);;
        $("#Spanish").toggle("slow");
        $("#Farsi").toggle(1000);
        $("#myLanguages").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#education").click(function(){
        $("#myLanguages").hide();
        $("#myEducation").toggle(1000).slideUp(1000).slideDown(1000);;
        $("#university").toggle(1000);
        $("#MCSD").toggle(4000);
        $("#Interpreter").fadeIn(1000);
    });
});

function textReader(){
  document.getElementById('textReaderDiv').style.display = "block";
}

function myDate(){
  document.getElementById("myDate").innerHTML =   Date();
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.myText = "";
});


function ReactApp(){
  document.getElementById('example1').style.display = "block";
}
