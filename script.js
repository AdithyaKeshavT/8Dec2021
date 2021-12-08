let main
function search(){
  let b=document.getElementById("city").value
  main=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=3fa085bb653a674e8d17313cfe11a2da`

  fetch(main)
  .then(v => v.json())
  .then(data => {
    document.getElementById("name").innerHTML=data.name;

    document.getElementById("country").innerHTML=data.sys.country;

    document.getElementById("tempmin").innerHTML=(data.main.temp_min-273).toFixed(2)+"°C";

    document.getElementById("tempmax").innerHTML=(data.main.temp_max-273).toFixed(2)+"°C";

    document.getElementById("avgtemp").innerHTML=(data.main.temp-273).toFixed(2)+"°C";

    let q="<img src='"+"http://openweathermap.org/img/w/"+data.weather[0].icon+".png'"+">";
    document.getElementById("weather").innerHTML=data.weather[0].description+q;

    document.getElementById("humidity").innerHTML=
    data.main.humidity+"%";
    
    document.getElementById("speed").innerHTML=data.wind.speed+" m/s";
    
    let rise = new Date(data.sys.sunrise).toLocaleTimeString("en-US")
    document.getElementById("rise").innerHTML=rise;
  })
}