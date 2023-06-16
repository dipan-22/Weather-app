const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0ccdbe417msh9e3d72f1cb950dcp1f9524jsn0c7eb6d7dddd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=> {
     cityName.innerHTML = city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {



            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            // sunrise.innerHTML = response.sunrise 
            //sunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")












/*const url = 'https://weather338.p.rapidapi.com/locations/search?query=New%20York&language=en-US';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0ccdbe417msh9e3d72f1cb950dcp1f9524jsn0c7eb6d7dddd',
        'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    }
};

fetch( 'https://weather338.p.rapidapi.com/Delhi/search?query=New%20York&language=en-US', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));*/

