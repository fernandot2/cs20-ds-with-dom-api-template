function switchSite(site){
    switch(site) {
        case "boredAPI":
            location.replace("/subsites/boredapi/boredapi.html");
            break;
        case "apod":
            location.replace("/subsites/apod/apod.html");
            break;
        case "catboy":
            location.replace("/subsites/catboy/catboy.html");
            break;
    }
    
}