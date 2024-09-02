var maxImage = 7;
var activeImageId = 1;
var nextImageId = 1;

setInterval(function() {
  nextImageId = nextImageId + 1;

  if (nextImageId < maxImage) {
    document.getElementById("img"+activeImageId).classList.replace("visible", "hidden");
    document.getElementById("img"+nextImageId).classList.replace("hidden", "visible");
    activeImageId = nextImageId;
  }
  else {
    document.getElementById("img"+activeImageId).classList.replace("visible", "hidden");
    document.getElementById("img"+nextImageId).classList.replace("hidden", "visible");
    activeImageId = maxImage;
    nextImageId = 0;
  }
}, 800);