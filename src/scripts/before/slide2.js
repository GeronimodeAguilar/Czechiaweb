var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
var slideInde1 = 0;
showSlide1();

function showSlide1() {
    var i;
    var slides = document.getElementsByClassName("mySlide1");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideInde1++;
    if (slideInde1 > slides.length) {slideInde1 = 1}    
      for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideInde1-1].style.display = "block";  
    setTimeout(showSlide1, 5000); // Change image every 2 seconds
}
var slideInde2 = 0;
showSlide2();

function showSlide2() {
    var i;
    var slides = document.getElementsByClassName("mySlide2");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideInde2++;
    if (slideInde2 > slides.length) {slideInde2 = 1}    
      for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideInde2-1].style.display = "block";  
    setTimeout(showSlide2, 5000); // Change image every 2 seconds
}
var slideInde3 = 0;
showSlide3();

function showSlide3() {
    var i;
    var slides = document.getElementsByClassName("mySlide3");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideInde3++;
    if (slideInde3 > slides.length) {slideInde3 = 1}    
      for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideInde3-1].style.display = "block";  
    setTimeout(showSlide3, 5000); // Change image every 2 seconds
}
function myFunction() {
    var x = document.getElementById("megamenu");
    if (x.className === "navbar") {
        x.className += " responsive"
       } else {x.className = "navbar";}
}; 