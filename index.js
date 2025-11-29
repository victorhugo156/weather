/*
I need to study how to convert UNIX timestamp to a JavaScript Date object 
as I did the function convertUnixToTime(unixTimestamp)
*/

const cards = document.querySelectorAll("section");
const btn = document.querySelector(".btn-search");


let weekCardOne = new Date();
let dayCardOne = new Date();

let weekCardTwo = new Date();
weekCardTwo.setDate(weekCardTwo.getDate()+1)
let dayCardTwo = new Date();
dayCardTwo.setDate(weekCardTwo.getDate())

let weekCardThree = new Date();
weekCardThree.setDate(weekCardThree.getDate()+2)
let dayCardThree = new Date();
dayCardThree.setDate(weekCardThree.getDate())

let weekCardFour = new Date();
weekCardFour.setDate(weekCardFour.getDate()+3)
let dayCardFour = new Date();
dayCardFour.setDate(weekCardFour.getDate())


const Inputs = {
    weekDay: document.querySelector(".week-day"),
    day: document.querySelector(".day"),
    tempStatus: document.querySelector(".temp-status"),
    maxTempUp: document.querySelector(".max-temp-up"),
    minTempUp: document.querySelector(".min-temp-up"),
    windSpeed: document.querySelector(".wind-speed"),
    humidityPercentage: document.querySelector(".humidity-percentage"),
    rainyPercentage: document.querySelector(".rainy-percentage"),
    currentTempBottom: document.querySelector(".current-temp")
}

const InputsTwo = {
    weekDay: document.querySelector("#two .week-day"),
    day: document.querySelector("#two .day"),
    tempStatus: document.querySelector("#two .temp-status"),
    maxTempUp: document.querySelector("#two .max-temp-up"),
    minTempUp: document.querySelector("#two .min-temp-up"),
    windSpeed: document.querySelector("#two .wind-speed"),
    humidityPercentage: document.querySelector("#two .humidity-percentage"),
    rainyPercentage: document.querySelector("#two .rainy-percentage"),

    currentTempBottom: document.querySelector("#two .current-temp")
}

const InputsThree = {
    weekDay: document.querySelector("#three .week-day"),
    day: document.querySelector("#three .day"),
    tempStatus: document.querySelector("#three .temp-status"),
    maxTempUp: document.querySelector("#three .max-temp-up"),
    minTempUp: document.querySelector("#three .min-temp-up"),
    windSpeed: document.querySelector("#three .wind-speed"),
    humidityPercentage: document.querySelector("#three .humidity-percentage"),
    rainyPercentage: document.querySelector("#three .rainy-percentage"),

    currentTempBottom: document.querySelector("#three .current-temp")
}

const InputsFour = {
    weekDay: document.querySelector("#four .week-day"),
    day: document.querySelector("#four .day"),
    tempStatus: document.querySelector("#four .temp-status"),
    maxTempUp: document.querySelector("#four .max-temp-up"),
    minTempUp: document.querySelector("#four .min-temp-up"),
    windSpeed: document.querySelector("#four .wind-speed"),
    humidityPercentage: document.querySelector("#four .humidity-percentage"),
    rainyPercentage: document.querySelector("#four .rainy-percentage"),

    currentTempBottom: document.querySelector("#four .current-temp")
}


//Function Initializing Application


function displayData(data){
    console.log(data)
    Inputs.weekDay.innerHTML = weekCardOne.toLocaleString("en-US", {weekday: "short"});
    Inputs.day.innerHTML = dayCardOne.toLocaleDateString("en-US", {day: "numeric", month: "short"} )

    Inputs.tempStatus.innerHTML = data.list[0].weather[0].main;
    Inputs.maxTempUp.innerHTML = Math.floor(data.list[0].main.temp_max) + "°";
    Inputs.minTempUp.innerHTML = Math.floor(data.list[0].main.temp_min) + "°";
    Inputs.windSpeed.innerHTML = data.list[0].wind.speed + "km";
    Inputs.humidityPercentage.innerHTML = convertUnixToTime(data.city.sunrise) + "hs";
    Inputs.rainyPercentage.innerHTML = convertUnixToTime(data.city.sunset) + "hs";
    Inputs.currentTempBottom.innerHTML = data.list[0].main.temp + "°";

    InputsTwo.weekDay.innerHTML = weekCardTwo.toLocaleString("en-US", {weekday: "short"});
    InputsTwo.day.innerHTML = dayCardTwo.toLocaleDateString("en-US", {timeZone: "Australia/Sydney", day: "numeric", month: "short"} )

    InputsTwo.tempStatus.innerHTML = data.list[9].weather[0].main;
    InputsTwo.maxTempUp.innerHTML = Math.floor(data.list[9].main.temp_max) + "°";
    InputsTwo.minTempUp.innerHTML = Math.floor(data.list[9].main.temp_min) + "°";
    InputsTwo.windSpeed.innerHTML = data.list[9].wind.speed + "km";
    InputsTwo.humidityPercentage.innerHTML = convertUnixToTime(data.city.sunrise) + "hs";
    InputsTwo.rainyPercentage.innerHTML = convertUnixToTime(data.city.sunset) + "hs";
    InputsTwo.currentTempBottom.innerHTML = data.list[9].main.temp + "°";

    InputsThree.weekDay.innerHTML = weekCardThree.toLocaleString("en-US", {weekday: "short"});
    InputsThree.day.innerHTML = dayCardThree.toLocaleDateString("en-US", {timeZone: "Australia/Sydney", day: "numeric", month: "short"} )

    InputsThree.tempStatus.innerHTML = data.list[19].weather[0].main;
    InputsThree.maxTempUp.innerHTML = Math.floor(data.list[19].main.temp_max) + "°";
    InputsThree.minTempUp.innerHTML = Math.floor(data.list[19].main.temp_min) + "°";
    InputsThree.windSpeed.innerHTML = data.list[19].wind.speed + "km";
    InputsThree.humidityPercentage.innerHTML = convertUnixToTime(data.city.sunrise) + "hs";
    InputsThree.rainyPercentage.innerHTML = convertUnixToTime(data.city.sunset) + "hs";
    InputsThree.currentTempBottom.innerHTML = data.list[19].main.temp + "°";

    InputsFour.weekDay.innerHTML = weekCardFour.toLocaleString("en-US", {weekday: "short"});
    InputsFour.day.innerHTML = dayCardFour.toLocaleDateString("en-US", {timeZone: "Australia/Sydney", day: "numeric", month: "short"} )

    InputsFour.tempStatus.innerHTML = data.list[27].weather[0].main;
    InputsFour.maxTempUp.innerHTML = Math.floor(data.list[27].main.temp_max) + "°";
    InputsFour.minTempUp.innerHTML = Math.floor(data.list[27].main.temp_min) + "°";
    InputsFour.windSpeed.innerHTML = data.list[27].wind.speed + "km";
    InputsFour.humidityPercentage.innerHTML = convertUnixToTime(data.city.sunrise) + " hs am";
    InputsFour.rainyPercentage.innerHTML = convertUnixToTime(data.city.sunset) + "hs pm";
    InputsFour.currentTempBottom.innerHTML = data.list[27].main.temp + "°";

    console.log(typeof(data.city.sunrise))

}

async function searchData(){
    const key ="2d005e7d7a6e9308a85e42ea86256c99";
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Sydney&appid=${key}&units=metric`)
    .then(resp => resp.json());

    document.querySelector(".city").innerHTML = data.city.name;

    displayData(data)
    checkWeather(data);
}

function convertUnixToTime(unixTimestamp) {
    // Create a new Date object using the UNIX timestamp (multiplied by 1000 to convert from seconds to milliseconds)
    const date = new Date(unixTimestamp * 1000);
    
    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format hours and minutes to HH:MM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    return formattedTime;
}

// Example usage
const sunrise = 1720299613;
const sunset = 1720335572;

console.log(convertUnixToTime(sunrise)); // e.g., "06:20"
console.log(convertUnixToTime(sunset));  // e.g., "18:20"




//This function is checking the weather and changing the background image according to the weather forecast
function checkWeather(data){
    const card1Img = document.querySelector("#one");

    if(data.list[0].weather[0].main === "Rain"){
        card1Img.style.backgroundImage = "url('./imgs/rainy.png')"
    }
    else if(data.list[0].weather[0].main === "Clouds"){
        card1Img.style.backgroundImage = "url('./imgs/cloudy.png')"
    }
    else if(data.list[0].weather[0].main === "Clear"){
        card1Img.style.backgroundImage = "url('./imgs/sunny.png')"
    }else{
        card1Img.style.backgroundImage = "url('./imgs/storm.png')"
    }

    const card2Img = document.querySelector("#two");

    if(data.list[9].weather[0].main === "Rain"){
        card2Img.style.backgroundImage = "url('./imgs/rainy.png')"
    }
    else if(data.list[9].weather[0].main === "Clouds"){
        card2Img.style.backgroundImage = "url('./imgs/cloudy.png')"
    }
    else if(data.list[9].weather[0].main === "Clear"){
        card2Img.style.backgroundImage = "url('./imgs/sunny.png')"
    }else{
        card2Img.style.backgroundImage = "url('./imgs/storm.png')"
    }

    const card3Img = document.querySelector("#three");

    if(data.list[19].weather[0].main === "Rain"){
        card3Img.style.backgroundImage = "url('./imgs/rainy.png')"
    }
    else if(data.list[19].weather[0].main === "Clouds"){
        card3Img.style.backgroundImage = "url('./imgs/cloudy.png')"
    }
    else if(data.list[19].weather[0].main === "Clear"){
        card3Img.style.backgroundImage = "url('./imgs/sunny.png')"
    }else{
        card3Img.style.backgroundImage = "url('./imgs/storm.png')"
    }

    const card4Img = document.querySelector("#four");

    if(data.list[27].weather[0].main === "Rain"){
        card4Img.style.backgroundImage = "url('./imgs/rainy.png')"
    }
    else if(data.list[27].weather[0].main === "Clouds"){
        card4Img.style.backgroundImage = "url('./imgs/cloudy.png')"
    }
    else if(data.list[27].weather[0].main === "Clear"){
        card4Img.style.backgroundImage = "url('./imgs/sunny.png')"
    }else{
        card4Img.style.backgroundImage = "url('./imgs/storm.png')"
    }
  
}

searchData();


/*---------------------------------------------------------------*/


btn.addEventListener("click", function(){
    const cityInput = document.querySelector(".input-city").value;
    
    console.log(cityInput);
    searchCity(cityInput)
})



//Function calling the API ()

async function searchCity(cityInput){
    const key ="2d005e7d7a6e9308a85e42ea86256c99";
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${key}&units=metric`)
        .then( response => response.json());
    console.log(data)

    let city = document.querySelector(".city");
    city.innerHTML = data.city.name;

    displayData(data);
    checkWeather(data);
}

// //Function to populate fields

// function populate(data){
    
//     document.querySelector(".max-temp-bottom").innerHTML = Math.floor(data.list[0].main.temp_max) + "°";
//     document.querySelector(".min-temp-bottom").innerHTML = Math.floor(data.list[0].main.temp_min) + "°";
// }


cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        cards.forEach(item=>{
            item.classList.remove('opened');
        })
        card.classList.add('opened')
    })
})