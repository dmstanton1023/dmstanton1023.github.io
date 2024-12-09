/* Salavation Slider */

var slider = document.getElementById("range_slider");
var output = document.getElementById("range_value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

/* Sliding Panel */
$(document).ready(function(){
  $(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
});


//AJAX request
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("salvation_prayer").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "Salvation_Prayer.txt");
  xhttp.send();
}
      