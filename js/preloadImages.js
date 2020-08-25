//Preload Images
var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("https://i.imgur.com/sgSXRRJ.png", "https://i.imgur.com/izA4bqy.png", "https://i.imgur.com/V2slDHT.png", "https://i.imgur.com/DRwT26j.png");
// End Preload Images
