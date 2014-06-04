// -------------------------------------------------------------
// Initialize Google Maps, display marker
function initMap(myLat,myLng, title) {
	if (typeof title == "undefined") {
		title = "";
	}
	var myLatLng = new google.maps.LatLng(myLat,myLng);
	var mapOptions = {zoom: 4,  center: myLatLng  };
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	var marker = new google.maps.Marker({ position: myLatLng,  map: map, title: title  });
}
// -------------------------------------------------------------
// Get the user's geolocation
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showUserMap);
	}
}
// -------------------------------------------------------------
// Show the user's location on Google Maps
function showUserMap(position){
	initMap(position.coords.latitude, position.coords.longitude, "Me");
}
// -------------------------------------------------------------
// -------------------------------------------------------------
$(document).ready(function() {
	// display user's geolocation on map
	$('#message').hide()
	getLocation();
	 $("a").tooltip();
	 $("#url-help").on("click", function() {
		return false;
	 });
	// retrieve the geolocation for the URL then map it
	$("#locateForm").submit(function(event) {
		event.preventDefault();
		$('#message').hide()
		var searchURL = $("#curl").val().substring(7);
		var geoURL =  "http://freegeoip.net/json/" + searchURL;
		jQuery.support.cors = true;
		$.ajax({
			url: geoURL,
			crossDomain:true,
			success: function(data){
				console.log("success");
				// API returned geolocation for the URL - place on map
				initMap(data["latitude"], data["longitude"], "Server for "+searchURL);
				console.log(data);
			},
			 error: function() {
			 	console.log("error");
	 			$("#message").show();
	 			$("#message .text").html("<strong>Error:</strong> Unable to find the geolocation; please make sure that the URL is valid.");
			}
		});
		return false;
	});
});