// -----------------navbar jabascript start-------------
var menu = document.getElementById("menubar");
var sidenav = document.getElementById("sidenav");

sidenav.style.width = "0px";
menu.onclick = function () {
  if (sidenav.style.width == "0px") {
    sidenav.style.width = "350px";
  } else {
    sidenav.style.width = "0px";
  }
};
// -----------------navbar jabascript end-------------
// ---------------header javacsript start-----------------
// <!-- Setup and start animation! -->
        

var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "UI/UX Designer",
    "Freelancer",
    "Programmer",
    "Blogger",
  ],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

// ---------------header javacsript end-----------------


// <!-- ------------------about section start------------------ -->
// <!-- ------------------about section end------------------ -->
