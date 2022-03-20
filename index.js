var weatherWidget = document.getElementById('weather-widget')
var form = document.querySelector('form')
var cityLocation = document.querySelector('input[type=text]')

form.onsubmit = function(e){
    e.preventDefault()
    console.log(cityLocation.value)
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=aba511288f68d80348241c0fad51e601&units=imperial&q=' + cityLocation.value)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        var div = document.createElement('div')
        var h3 = document.createElement('h3')
        h3.textContent = data.name + ", " + data.sys.country
        h3.classList.add("city-heading")
        div.appendChild(h3)

        var img = document.createElement('img')
        img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        img.classList.add("icon")
        div.appendChild(img)

        var p = document.createElement('p')
        p.textContent = data.weather[0].description
        p.classList.add("weather-description")
        div.appendChild(p)

        var p2 = document.createElement('p')
        p2.textContent = "Current: "+ data.main.temp + "\u00B0 F"
        p2.classList.add("current-temp")
        div.appendChild(p2)

        var p3 = document.createElement('p')
        p3.textContent = "Feels Like: "+ data.main.feels_like+ "\u00B0 F"
        p3.classList.add("feels-like")
        div.appendChild(p3)

        weatherWidget.appendChild(div)
    })
    
    .catch(function(err){

        var error = document.createElement('h2')
        error.textContent = "Location Not Found"
        error.classList.add("error")

        document.getElementById("weather-widget").appendChild(error);

    })
}

