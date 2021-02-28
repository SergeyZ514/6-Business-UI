// GOOGLE MAP

let map;
function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 53.165, lng: 12.046 },
      zoom: 4,
   });
}

// Create the script tag, set the appropriate attributes
let script = document.createElement('script');
script.src =
   'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxYZBV2dKdEWZKzyStExnOSQWols5mlFI&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
   // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
