// necessary variables HideHrad
var map;
var infoWindow;
// markersData variable stores the information necessary to each marker
var markersData = [
   {
      "lat": 50.0901214,
      "lng": 14.3990391,
      "name": "Prague",
      "picture": "<img class='pctr' src='../img/cont/vinopolehna720x540.jpg'>",
      "address1": "408",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem",
      "phone": "tel: 518 322 828", // don't insert comma in the last item of each marker
      "website": "<a class='website' href='http://www.vinopolehna.cz'>vinopolehna.cz</a>"
   },
        {
      "lat": 49.1952048,
      "lng": 16.607792,
      "name": "Brno",
      "picture": "<img class='pctr' src='../img/cont/zajecihycl720x540.jpg'>",
      "address1":"Školní 141",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 829 465",
      "website": "<a class='website' href='http://www.vinarnazdena.eu'>vinarnazdena.eu</a>"
   },   
           {
      "lat": 49.8356603,
      "lng": 18.2924342,
      "name": "Ostrava",
      "picture": "<img class='pctr' src='../img/cont/ledniceucapku720x540.jpg'>",
      "address1":"ulice Cihlářská",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 516 900",
      "website": "<a class='website' href='http://www.ucapku.cz'>ucapku.cz</a>"
   },   
              {
      "lat": 49.7472796,
      "lng": 13.3770321,
      "name": "Plzen",
      "picture": "<img class='pctr' src='../img/cont/ledniceucapku720x540.jpg'>",
      "address1":"ulice Cihlářská",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 516 900",
      "website": "<a class='website' href='http://www.ucapku.cz'>ucapku.cz</a>"
   },      
              {
      "lat": 49.5937127,
      "lng": 17.2509332,
      "name": "Olomouc",
      "picture": "<img class='pctr' src='../img/cont/ledniceucapku720x540.jpg'>",
      "address1":"ulice Cihlářská",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 516 900",
      "website": "<a class='website' href='http://www.ucapku.cz'>ucapku.cz</a>"
   }  // don't insert comma in the last item
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(49.7437618,15.3386515),
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.HYBRID
   };

   map = new google.maps.Map(document.getElementById('map'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var picture = markersData[i].picture;
      var address1 = markersData[i].address1;
      var postalCode = markersData[i].postalCode;
      var phone = markersData[i].phone;
      var website = markersData[i].website;
      createMarker(latlng, name, picture, address1, postalCode, phone, website);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, picture, address1, postalCode, phone, website){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
        icon: "../img/lgo/Coat_of_arms_of_the_Czech_Republic50x60.png",
        title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(13);
  map.setCenter(marker.getPosition());
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div class="iw_content">' + picture + '<div class="iw_title">' + name + '</div>' +
      '<div class="adrss">' + address1 + '</div><div class="pstl">' +
          postalCode + '</div>' +
        '<div class="telphn">' + phone + '</div>' + '<div class="lnk">'+ website + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}