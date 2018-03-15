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
        dots[i].className = dots[i].className.replace(" act", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " act";
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
function openNav() {
    document.getElementById("megamenu").style.height = "100%";
}

function closeNav() {
    document.getElementById("megamenu").style.height = "0%";
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndem = 1;
showSlidesm(slideIndem);

function plusSlides(n) {
  showSlidesm(slideIndem += n);
}

function currentSlide(n) {
  showSlidesm(slideIndem = n);
}

function showSlidesm(n) {
  var i;
  var slides = document.getElementsByClassName("modalSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndem = 1}
  if (n < 1) {slideIndem = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndem-1].style.display = "block";
  dots[slideIndem-1].className += " active";
  captionText.innerHTML = dots[slideIndem-1].alt;
}

var animateHTML = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hidden')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'fade-in-element')
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()