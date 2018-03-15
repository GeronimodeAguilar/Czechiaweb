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
function openNav() {
    document.getElementById("megamenu").style.height = "100%";
}

function closeNav() {
    document.getElementById("megamenu").style.height = "0%";
}
    var locations = [
      ['Prague', 50.0901214,14.3990391, 4],
      ['Brno', 49.1952048,16.607792, 5],
      ['Ostrava', 49.8356603,18.2924342, 3],
      ['Plzen', 49.7472796,13.3770321, 2],
      ['Olomouc', 49.5937127,17.2509332, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: new google.maps.LatLng(49.7437618,15.3386515),
      mapTypeId: google.maps.MapTypeId.HYBRID
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: "../img/lgo/Coat_of_arms_of_the_Czech_Republic50x60.png",
		map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }