let map;
function initMap() {
 const options ={
   zoom:15,
   center:{lat:41.359770,lng:-72.109261},
   mapId: '',                                     //FIX ME
   
 }
 const map = new google.maps.Map(document.getElementById('map'),options)

 const image = "snorlax.png";
 
 const firstMarker = new google.maps.Marker({
   position: {lat:41.35948, lng: -72.129261}, map,
   icon: image,
   
 });
}