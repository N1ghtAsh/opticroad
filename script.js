$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});
/*var usrName=window.prompt("Enter Your Name");
document.getElementById("newusr").innerHTML=usrName;*/

//document.getElementById("new0").onclick=function (){alert(I will complete it later)};
alert("Try it on Smarphones. It's not ready yet for big devices like Computer, laptop or tab...")
//console.log("Try it on Smarphones. It's not ready yet for big devices like Computer, laptop or tab...")
var yorNme;

function getNameValue() {
  yorNme = window.prompt("Enter your name:");
  document.getElementById("n1").innerHTML = yorNme;
  //document.getElementByName("nme").input=yorNme;
};
