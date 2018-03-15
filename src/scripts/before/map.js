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
        icon: "img/erb.png",
		map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }