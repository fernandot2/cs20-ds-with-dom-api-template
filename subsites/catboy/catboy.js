//Takes in a picture with artist name and link, creates a list item and puts that information in it, then adds the list item onto the 'catboyList' list on index.html
function addImage(src, artist, credit){
    let image = document.createElement("img");
    image.src = src;
    image.alt = "catboy";
    image.width = 500;
    image.height = image.width;

    //Checks to see if there is an artist then credits them.
    let artistName = document.createElement("a");
    if(credit != "none" && credit != "unknown"){
        artistName.href = credit;
    };
    artistName.innerHTML = `Artist: ${artist}`;
    

    let listEntry = document.createElement("li");
    listEntry.appendChild(image);
    listEntry.appendChild(artistName);

    let list = document.getElementById("catboyList");
    list.appendChild(listEntry);
}

async function generateImage(){
    let numInput = document.getElementById("numInput").value;
    let numOfImages;
    if(!isNaN(numInput)){
        numOfImages = numInput;
    }
    for(let i = 0; i < numOfImages; i++){
        setTimeout(fetchImage, 1000);    
    }
}   

async function fetchImage(){
    let fetchImage = await fetch("https://api.catboys.com/img")
    let catboyImage = await fetchImage.json();
    addImage(catboyImage.url, catboyImage.artist, catboyImage.artist_url);      
}