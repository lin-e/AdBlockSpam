var msDelay = 10;
setInterval(function() {
  if (document.getElementById("advert").style.opacity !== "") {
    document.getElementById("ad_tracker").innerHTML = "<img id='advert' src='advert.jpg' style='display: none;'/>"; 
  }
}, msDelay);
