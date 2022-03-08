// Changes the background color of the body element using the bgColorPicker color input | Turns the text color to white if the light level (found using HEXLight) is <= 75
function bgColorChanger(){
    let bgColor = document.getElementById("bgColorPicker").value;
    document.body.style.backgroundColor = bgColor;

    let light = HEXLight(bgColor);
    if(light <= 75){
        document.body.style.color = "#FFFFFF"
    }else{
        document.body.style.color = "#000000"
    }

}

// Takes in a HEX color input, separates the red green and blue values, converts them from hex to decimal, takes the highest and lowest color level and returns their average.
function HEXLight(col){
    let redHEX = `${col[1]}${col[2]}`;
    let greenHEX = `${col[3]}${col[4]}`;
    let blueHEX = `${col[5]}${col[6]}`;

    let redValue = parseInt(redHEX, 16);
    let greenValue = parseInt(greenHEX, 16);
    let blueValue = parseInt(blueHEX, 16);

    let min = Math.min(redValue, greenValue, blueValue);
    let max = Math.max(redValue, greenValue, blueValue);
    return (min+max)/2;
}

// Asks boredAPI for an activity using a type and changes the h1 and h2 element to a description of it.
async function boredAPI(){
    let activityType = document.getElementById("typeSelection").value;
    let boredFetch = await fetch(`https://www.boredapi.com/api/activity?type=${activityType}`);
    let activity = await boredFetch.json();

    let h1 = document.getElementById("activityResponse");
    h1.innerHTML = activity.activity;

    let h2 = document.getElementById("priceOfActivity");
    h2.innerHTML = `Price (lower = cheaper): ${activity.price*10}`;
}