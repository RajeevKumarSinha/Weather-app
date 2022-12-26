// This is a variable declaration. 
// It declares a variable called searchbtn and assigns it the value of 
// the element with class name search.
const searchbtn = document.querySelector(".search");

// cityinpt is linked to input field 
const cityinpt = document.querySelector(".cityTxtField");

// cityName is linked to the div which will show the city name in it 
const cityName = document.querySelector(".cityName");

// temp is the p tag which will show the current temperature
const temp = document.querySelector('.temp');

// weather is the h1 tag which will show the weather of the location 
const weather = document.querySelector(".weather");

// minTemp is the p tag which will show the minimum temperature 
// of the place 
const minTemp = document.querySelector(".minTemp");

// maxTemp is the p tag which will show the max temperature of the place 
const maxTemp = document.querySelector(".maxTemp")





// this weatherFunction is an async function
// it fetches the data from the api on click of the search btn
async function weatherFunction (cityNameInput){
    try{
        // console.log(cityName)
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e8c8918586134736a97180136222212&q=${cityNameInput}&days=1&aqi=no&alerts=no`);
    const cityWeather = await response.json();
    return cityWeather;
    }catch(error){
        return error;
    }
 }


 // here click event is attached to the searchbtn
// when the event is triggered it calls weatherfunction
searchbtn.onclick = () => {
    weatherFunction(cityinpt.value)
    .then(cityWeather=>{
        console.log(cityWeather)
        cityName.innerText=cityWeather.location.name;
        temp.innerText = cityWeather.current.temp_c;
        maxTemp.innerText = cityWeather.forecast.forecastday[0].day.maxtemp_c;
        weather.innerText = cityWeather.current.condition.text;
        minTemp.innerText = cityWeather.forecast.forecastday[0].day.mintemp_c;
    })
    .catch(error=> {
        console.log(error)
    })
}

