$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  var str1 = "<h1>Hello! My name is Nicholas Alex</h1>";
var str2 = "<p>I am a Full Stack Web Developer!</p>";
var str3 = "<button>Enter</button>";
var newArr = str1.split("");
var number = 0;
var isElement = false;
var typing;
var completedHeading = false;
var completedParagraph = false;
var loadingTimer = 5;
var flashingOn = false;
var loading;

pageStart();

function pageStart(){
  var website= sessionStorage.getItem("visited");
  if(website === null){
    loading = setInterval(loadingPage, 400);
  }
  else{
    document.getElementById("front-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
  }
}



function loadingPage(){
  if(loadingTimer >= 0 && flashingOn == false){
  $("#content-here").text("|");
  loadingTimer--;
  flashingOn = true;
  }
  else if(loadingTimer >= 0 && flashingOn == true){
    $("#content-here").text("");
    loadingTimer--;
    flashingOn = false;
  }
  else{
    clearInterval(loading);
    typer();
  }
}

function typer(){
  
  document.getElementById("content-here").innerHTML = "";
 typing = setInterval(checkItem, 60);
}

function checkItem() {
  if (number <= newArr.length) {
    if (newArr[number] === "<") {
      isElement = true;
      myFunction2();
    }
    if (newArr[number] === ">") {
      $("#content-here").append("<span>" + newArr[number]);
      isElement = false;
      number++;
    }
    else {
      myFunction2();
    }
  } else {
    if (completedHeading === false && completedParagraph === false) {
      clearInterval(typing);
      $("#content-here").append("<br>");
      newArr = str2.split("");
      number = 0;
      typing = setInterval(checkItem, 60);
      completedHeading = true;
    } 
    else if(completedHeading === true && completedParagraph === false){
      clearInterval(typing);
      $("#content-here").append("<br>");
      newArr = str3.split("");
      number = 0;
      typing = setInterval(checkItem, 60);
      completedParagraph = true;
    }
    
    else {
      clearInterval(typing);
      document.getElementById("run-button").style.display = "block";
    }

  }
}

function myFunction2() {
  if (isElement === true) {
    $("#content-here").append("<span>" + newArr[number]);
    number++;
  } else {
    $("#content-here").append(newArr[number]);
    number++;
  }

}

});

function runButton(){
  document.getElementById("run-button").style.display = "none";
  document.getElementById("content-here").style.display = "none";
  document.getElementById("content-here2").style.display = "block";
}

function enterSite() {
    document.getElementById("content-here").style.display = "none";
    document.getElementById("content-here2").style.display = "none";
    document.getElementById("enter-button").style.display = "none";
    pageStart();
  
}

function pageStart() {
  sessionStorage.setItem("visited", "yes")
  document.getElementById("front-page").style.display = "none";
  document.getElementById("main-page").style.display = "block";
}