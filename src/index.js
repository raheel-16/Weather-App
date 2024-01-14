import './style.css'
import {format} from 'date-fns'

const responseApi = 'http://api.weatherapi.com/v1/forecast.json?key=406cb5307400409d9e533627232310&q='


async function showWeather() {
        const data = await fetch(`${responseApi}=Toronto&days=7&aqi=no&alerts=yes`);
        const response = await data.json();
        document.getElementsByClassName('date')[0].innerHTML = format(new Date(response.current.last_updated), 'eeee, MMMM do yyyy')
        document.getElementsByClassName('location')[0].innerHTML = response.location.name;
        document.getElementsByClassName('condition')[0].innerHTML = response.current.condition.text
        document.getElementsByClassName('temp')[0].innerHTML = response.current.temp_c + "°C";
        document.getElementsByClassName('tempHigh')[0].innerHTML = "H:" + response.forecast.forecastday[0].day.maxtemp_c + "°C";
        document.getElementsByClassName('tempLow')[0].innerHTML = "L:" + response.forecast.forecastday[0].day.mintemp_c + "°C"
        document.getElementsByClassName('tempToday0')[0].innerHTML = response.forecast.forecastday[0].hour[0].temp_c + "°C";
        document.getElementsByClassName('tempToday1')[0].innerHTML = response.forecast.forecastday[0].hour[1].temp_c + "°C";
        document.getElementsByClassName('tempToday2')[0].innerHTML =  response.forecast.forecastday[0].hour[2].temp_c + "°C";
        document.getElementsByClassName('tempToday3')[0].innerHTML = response.forecast.forecastday[0].hour[3].temp_c + "°C";
        document.getElementsByClassName('tempToday4')[0].innerHTML = response.forecast.forecastday[0].hour[4].temp_c + "°C";
        document.getElementsByClassName('tempToday5')[0].innerHTML =  response.forecast.forecastday[0].hour[5].temp_c + "°C";
        document.getElementsByClassName('tempToday6')[0].innerHTML = response.forecast.forecastday[0].hour[6].temp_c + "°C";
        document.getElementsByClassName('tempToday7')[0].innerHTML = response.forecast.forecastday[0].hour[7].temp_c + "°C";
        document.getElementsByClassName('tempToday8')[0].innerHTML = response.forecast.forecastday[0].hour[8].temp_c + "°C";
        document.getElementsByClassName('tempToday9')[0].innerHTML = response.forecast.forecastday[0].hour[9].temp_c + "°C";
        document.getElementsByClassName('tempToday10')[0].innerHTML = response.forecast.forecastday[0].hour[10].temp_c + "°C";
        document.getElementsByClassName('tempToday11')[0].innerHTML = response.forecast.forecastday[0].hour[11].temp_c + "°C";
        document.getElementsByClassName('tempToday12')[0].innerHTML = response.forecast.forecastday[0].hour[12].temp_c + "°C";
        document.getElementsByClassName('tempToday13')[0].innerHTML = response.forecast.forecastday[0].hour[13].temp_c + "°C";
        document.getElementsByClassName('tempToday14')[0].innerHTML = response.forecast.forecastday[0].hour[14].temp_c + "°C";
        document.getElementsByClassName('tempToday15')[0].innerHTML = response.forecast.forecastday[0].hour[15].temp_c + "°C";
        document.getElementsByClassName('tempToday16')[0].innerHTML = response.forecast.forecastday[0].hour[16].temp_c + "°C";
        document.getElementsByClassName('tempToday17')[0].innerHTML = response.forecast.forecastday[0].hour[17].temp_c + "°C";
        document.getElementsByClassName('tempToday18')[0].innerHTML = response.forecast.forecastday[0].hour[18].temp_c + "°C";
        document.getElementsByClassName('tempToday19')[0].innerHTML = response.forecast.forecastday[0].hour[19].temp_c + "°C";
        document.getElementsByClassName('tempToday20')[0].innerHTML = response.forecast.forecastday[0].hour[20].temp_c + "°C";
        document.getElementsByClassName('tempToday21')[0].innerHTML = response.forecast.forecastday[0].hour[21].temp_c + "°C";
        document.getElementsByClassName('tempToday22')[0].innerHTML = response.forecast.forecastday[0].hour[22].temp_c + "°C";
        document.getElementsByClassName('tempToday23')[0].innerHTML = response.forecast.forecastday[0].hour[23].temp_c + "°C";

        document.getElementsByClassName('sunriseTime')[0].innerHTML = response.forecast.forecastday[0].astro.sunrise;
        document.getElementsByClassName('sunsetTime')[0].innerHTML = response.forecast.forecastday[0].astro.sunset
        document.getElementsByClassName('uvIndexValue')[0].innerHTML = response.current.uv
        document.getElementsByClassName('precipText')[0].innerHTML = response.current.precip_mm + "mm"
        document.getElementsByClassName('windText')[0].innerHTML = response.current.wind_dir + " " + response.current.wind_kph + "km/h"
        document.getElementsByClassName('humidityText')[0].innerHTML = response.current.humidity
        document.getElementsByClassName('feelsLikeText')[0].innerHTML = response.current.feelslike_c + "°C"
        document.getElementsByClassName('visibText')[0].innerHTML = response.current.vis_km + " " + "km"
        document.getElementsByClassName('pressText')[0].innerHTML = response.current.pressure_mb + " "  + "hPa"
        document.getElementsByClassName('rainText')[0].innerHTML =  response.forecast.forecastday[0].hour[14].chance_of_rain + "%"
        document.getElementsByClassName('dateOne')[0].innerHTML = format(new Date(response.forecast.forecastday[1].date), 'iiii')
        document.getElementsByClassName('tempDayOne')[0].innerHTML = response.forecast.forecastday[1].day.maxtemp_c + "°C" + " / " + response.forecast.forecastday[1].day.mintemp_c + "°C" 
        document.getElementsByClassName('uvDayOne')[0].innerHTML = response.forecast.forecastday[1].day.uv
        document.getElementsByClassName('humDayOne')[0].innerHTML = response.forecast.forecastday[1].day.avghumidity
        document.getElementsByClassName('dateTwo')[0].innerHTML = format(new Date(response.forecast.forecastday[2].date), 'iiii')
        document.getElementsByClassName('tempDayTwo')[0].innerHTML = response.forecast.forecastday[2].day.maxtemp_c + "°C" + " / " + response.forecast.forecastday[1].day.mintemp_c +  "°C";
        document.getElementsByClassName('uvDayTwo')[0].innerHTML = response.forecast.forecastday[2].day.uv
        document.getElementsByClassName('humDayTwo')[0].innerHTML = response.forecast.forecastday[2].day.avghumidity
        const tempElement = document.getElementsByClassName('temp')[0];
        const feelsLikeElement = document.getElementsByClassName('feelsLikeText')[0];
        const dayOneElement = document.getElementsByClassName('tempDayOne')[0];
        const dayTwoElement = document.getElementsByClassName('tempDayTwo')[0];
        
        const changeTempC = document.getElementsByClassName('changeTempC')[0];
        changeTempC.addEventListener('click', newWeatherC);
        
        const changeTempF = document.getElementsByClassName('changeTempF')[0];
        changeTempF.addEventListener('click', newWeatherF);
        
        function newWeatherC() {
            const currentTemp = tempElement.innerHTML;
        
            if (currentTemp.includes('°F')) {
                // Convert from Fahrenheit to Celsius
                tempElement.innerHTML = response.current.temp_c + "°C";
                feelsLikeElement.innerHTML = response.current.feelslike_c + "°C";
                dayOneElement.innerHTML = response.forecast.forecastday[1].day.maxtemp_c + "°C" + " / " + response.forecast.forecastday[1].day.mintemp_c + "°C";
                dayTwoElement.innerHTML = response.forecast.forecastday[2].day.maxtemp_c + "°C" + " / " + response.forecast.forecastday[2].day.mintemp_c + "°C";
            }
        }
        
        function newWeatherF() {
            const currentTemp = tempElement.innerHTML;
        
            if (currentTemp.includes('°C')) {
                // Convert from Celsius to Fahrenheit
                tempElement.innerHTML = response.current.temp_f + "°F";
                feelsLikeElement.innerHTML = response.current.feelslike_f + "°F";
                dayOneElement.innerHTML = response.forecast.forecastday[1].day.maxtemp_f + "°F" + " / " + response.forecast.forecastday[1].day.mintemp_f + "°F";
                dayTwoElement.innerHTML = response.forecast.forecastday[2].day.maxtemp_f + "°F" + " / " + response.forecast.forecastday[2].day.mintemp_f + "°F";
            }
        }


    


    
}

showWeather();

const submit = document.getElementsByClassName('submit')[0];

submit.addEventListener("click", displayWeather);

async function displayWeather() {
    const input = document.getElementsByClassName('textInput')[0].value;
    const newData = await fetch(`${responseApi}${input}&days=7&aqi=no&alerts=yes`);
    const newResponse = await newData.json();
    
    document.getElementsByClassName('date')[0].innerHTML = format(new Date(newResponse.current.last_updated), 'eeee, MMMM do yyyy')
    document.getElementsByClassName('location')[0].innerHTML = newResponse.location.name;
    document.getElementsByClassName('condition')[0].innerHTML = newResponse.current.condition.text
    document.getElementsByClassName('temp')[0].innerHTML = newResponse.current.temp_c + "°";
    document.getElementsByClassName('tempHigh')[0].innerHTML = "H:" + newResponse.forecast.forecastday[0].day.maxtemp_c + "°C";
    document.getElementsByClassName('tempLow')[0].innerHTML = "L:" + newResponse.forecast.forecastday[0].day.mintemp_c + "°";
    document.getElementsByClassName('sunriseTime')[0].innerHTML = newResponse.forecast.forecastday[0].astro.sunrise;
    document.getElementsByClassName('sunsetTime')[0].innerHTML = newResponse.forecast.forecastday[0].astro.sunset
    document.getElementsByClassName('uvIndexValue')[0].innerHTML = newResponse.current.uv
    document.getElementsByClassName('precipText')[0].innerHTML = newResponse.current.precip_mm + "mm"
    document.getElementsByClassName('windText')[0].innerHTML = newResponse.current.wind_dir + newResponse.current.wind_kph + "km/h"
    document.getElementsByClassName('humidityText')[0].innerHTML = newResponse.current.humidity
    document.getElementsByClassName('feelsLikeText')[0].innerHTML = newResponse.current.feelslike_c + "°"
    document.getElementsByClassName('visibText')[0].innerHTML = newResponse.current.vis_km + " " + "km"
    document.getElementsByClassName('pressText')[0].innerHTML = newResponse.current.pressure_mb + " "  + "hPa"
    document.getElementsByClassName('rainText')[0].innerHTML =  newResponse.forecast.forecastday[0].hour[14].chance_of_rain + "%"
    document.getElementsByClassName('dateOne')[0].innerHTML = newResponse.forecast.forecastday[1].date
    document.getElementsByClassName('tempDayOne')[0].innerHTML = newResponse.forecast.forecastday[1].day.maxtemp_c + "/" + newResponse.forecast.forecastday[1].day.mintemp_c
    document.getElementsByClassName('uvDayOne')[0].innerHTML = newResponse.forecast.forecastday[1].day.uv
    document.getElementsByClassName('humDayOne')[0].innerHTML = newResponse.forecast.forecastday[1].day.avghumidity
    document.getElementsByClassName('dateTwo')[0].innerHTML = newResponse.forecast.forecastday[2].date
    document.getElementsByClassName('tempDayTwo')[0].innerHTML = newResponse.forecast.forecastday[2].day.maxtemp_c + "°" + "/" + newResponse.forecast.forecastday[1].day.mintemp_c + "°";
    document.getElementsByClassName('uvDayTwo')[0].innerHTML = newResponse.forecast.forecastday[2].day.uv
    document.getElementsByClassName('humDayTwo')[0].innerHTML = newResponse.forecast.forecastday[2].day.avghumidity

    document.getElementsByClassName('tempToday0')[0].innerHTML = newResponse.forecast.forecastday[0].hour[0].temp_c + "°C";
    document.getElementsByClassName('tempToday1')[0].innerHTML = newResponse.forecast.forecastday[0].hour[1].temp_c + "°C";
    document.getElementsByClassName('tempToday2')[0].innerHTML =  newResponse.forecast.forecastday[0].hour[2].temp_c + "°C";
    document.getElementsByClassName('tempToday3')[0].innerHTML = newResponse.forecast.forecastday[0].hour[3].temp_c + "°C";
    document.getElementsByClassName('tempToday4')[0].innerHTML = newResponse.forecast.forecastday[0].hour[4].temp_c + "°C";
    document.getElementsByClassName('tempToday5')[0].innerHTML =  newResponse.forecast.forecastday[0].hour[5].temp_c + "°C";
    document.getElementsByClassName('tempToday6')[0].innerHTML = newResponse.forecast.forecastday[0].hour[6].temp_c + "°C";
    document.getElementsByClassName('tempToday7')[0].innerHTML = newResponse.forecast.forecastday[0].hour[7].temp_c + "°C";
    document.getElementsByClassName('tempToday8')[0].innerHTML = newResponse.forecast.forecastday[0].hour[8].temp_c + "°C";
    document.getElementsByClassName('tempToday9')[0].innerHTML = newResponse.forecast.forecastday[0].hour[9].temp_c + "°C";
    document.getElementsByClassName('tempToday10')[0].innerHTML = newResponse.forecast.forecastday[0].hour[10].temp_c + "°C";
    document.getElementsByClassName('tempToday11')[0].innerHTML = newResponse.forecast.forecastday[0].hour[11].temp_c + "°C";
    document.getElementsByClassName('tempToday12')[0].innerHTML = newResponse.forecast.forecastday[0].hour[12].temp_c + "°C";
    document.getElementsByClassName('tempToday13')[0].innerHTML = newResponse.forecast.forecastday[0].hour[13].temp_c + "°C";
    document.getElementsByClassName('tempToday14')[0].innerHTML = newResponse.forecast.forecastday[0].hour[14].temp_c + "°C";
    document.getElementsByClassName('tempToday15')[0].innerHTML = newResponse.forecast.forecastday[0].hour[15].temp_c + "°C";
    document.getElementsByClassName('tempToday16')[0].innerHTML = newResponse.forecast.forecastday[0].hour[16].temp_c + "°C";
    document.getElementsByClassName('tempToday17')[0].innerHTML = newResponse.forecast.forecastday[0].hour[17].temp_c + "°C";
    document.getElementsByClassName('tempToday18')[0].innerHTML = newResponse.forecast.forecastday[0].hour[18].temp_c + "°C";
    document.getElementsByClassName('tempToday19')[0].innerHTML = newResponse.forecast.forecastday[0].hour[19].temp_c + "°C";
    document.getElementsByClassName('tempToday20')[0].innerHTML = newResponse.forecast.forecastday[0].hour[20].temp_c + "°C";
    document.getElementsByClassName('tempToday21')[0].innerHTML = newResponse.forecast.forecastday[0].hour[21].temp_c + "°C";
    document.getElementsByClassName('tempToday22')[0].innerHTML = newResponse.forecast.forecastday[0].hour[22].temp_c + "°C";
    document.getElementsByClassName('tempToday23')[0].innerHTML = newResponse.forecast.forecastday[0].hour[23].temp_c + "°C";

    const tempElement = document.getElementsByClassName('temp')[0];
    const feelsLikeElement = document.getElementsByClassName('feelsLikeText')[0];
    const dayOneElement = document.getElementsByClassName('tempDayOne')[0];
    const dayTwoElement = document.getElementsByClassName('tempDayTwo')[0];
    
    const changeTempC = document.getElementsByClassName('changeTempC')[0];
    changeTempC.addEventListener('click', newWeatherC);
    
    const changeTempF = document.getElementsByClassName('changeTempF')[0];
    changeTempF.addEventListener('click', newWeatherF);
    
    function newWeatherC() {
        const currentTemp = tempElement.innerHTML;
    
        if (currentTemp.includes('°F')) {
            // Convert from Fahrenheit to Celsius
            tempElement.innerHTML = newResponse.current.temp_c + "°C";
            feelsLikeElement.innerHTML = newResponse.current.feelslike_c + "°C";
            dayOneElement.innerHTML = newResponse.forecast.forecastday[1].day.maxtemp_c + "°C" + " / " + newResponse.forecast.forecastday[1].day.mintemp_c + "°C";
            dayTwoElement.innerHTML = newResponse.forecast.forecastday[2].day.maxtemp_c + "°C" + " / " + newResponse.forecast.forecastday[2].day.mintemp_c + "°C";
        }
    }
    
    function newWeatherF() {
        const currentTemp = tempElement.innerHTML;
    
        if (currentTemp.includes('°C')) {
            // Convert from Celsius to Fahrenheit
            tempElement.innerHTML = newResponse.current.temp_f + "°F";
            feelsLikeElement.innerHTML = newResponse.current.feelslike_f + "°F";
            dayOneElement.innerHTML = newResponse.forecast.forecastday[1].day.maxtemp_f + "°F" + " / " + newResponse.forecast.forecastday[1].day.mintemp_f + "°F";
            dayTwoElement.innerHTML = newResponse.forecast.forecastday[2].day.maxtemp_f + "°F" + " / " + newResponse.forecast.forecastday[2].day.mintemp_f + "°F";
        }
    }


}