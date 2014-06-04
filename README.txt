== What is This? == 
 
A responsive web page that allows a user to find where the servers of any website are located.
 
== How Does it Work? ==

After the user enters a URL and presses the Submit button, a RESTFul AJAX call is made to the freegeoip.net service, which returns the geolocation for the URL; the callback function calls the Google Maps API to position a marker at that location on the map.


== Starting Point ==

index.html - The starting point for this application. 

== What Does it Use? ==

3rd Party Libraries - 
- Bootstrap: bootstrap.min.js (a front-end framework)

- jQuery: https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js

APIs -
- http://maps.google.com/maps/api/js?sensor=false - Google Maps API; a Google map must be initialized with a latitude and longitude and a zoom level 

- http://freegeoip.net/ - RESTful API for retrieving the geolocations of IP address and website urls. Ajax calls are of the following format: http://freegeoip.net/json/*host*, where *host* is the entered domain name. Returns JSON with following format -
{
"ip": "186.192.90.5",
"country_code": "BR",
"country_name": "Brazil",
"region_code": "",
"region_name": "",
"city": "",
"zipcode": "",
"latitude": -10,
"longitude": -55,
"metro_code": "",
"areacode": ""
}
