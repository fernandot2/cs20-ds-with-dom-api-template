let pictureOfTheDay = document.getElementById("picOfDay");
fetch("https://api.nasa.gov/planetary/apod?api_key=ED7sy6mNf7LbFSJ3biFjgLyZmi8arYAIDVMFh9Xh")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        pictureOfTheDay.src = data.url;
        let dateSelector = document.getElementById("selectedDate");
        dateSelector.max= data.date;
    })

async function dateSelect(){
    document.getElementById("videoOfDay").hidden = true;
    pictureOfTheDay.hidden = true;

    let date = document.getElementById("selectedDate").value;
    let fetchResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=ED7sy6mNf7LbFSJ3biFjgLyZmi8arYAIDVMFh9Xh&date=${date}`);
    let dateJson = await fetchResponse.json();
    if(!dateJson.url.includes("youtube")){
        pictureOfTheDay.hidden = false;
        pictureOfTheDay.src = dateJson.url;
        document.getElementById("title").innerHTML = `Nasa's picture on ${date}`;
    }else{
        document.getElementById("videoOfDay").hidden = false;
        document.getElementById("title").innerHTML = `Nasa's video on ${date}`
        document.getElementById("videoOfDay").src = dateJson.url;
    }
    
}