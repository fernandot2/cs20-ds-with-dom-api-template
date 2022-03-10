function switchSite(site){
    let locationSub = location.replace("/index.html","");
    console.log(locationSub);
    switch(site) {
        case "boredAPI":
            window.location.href = ("./subsites/boredapi/boredapi.html");
            break;
        case "apod":
            window.location.href = ("./subsites/apod/apod.html");
            break;
        case "catboy":
            window.location.href = ("./subsites/catboy/catboy.html");
            break;
    }
    
}