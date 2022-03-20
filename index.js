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
        div.appendChild(h3)

        var img = document.createElement('img')
        img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        div.appendChild(img)

        var p = document.createElement('p')
        p.textContent = data.weather[0].description
        div.appendChild(p)

        var p2 = document.createElement('p')
        p2.textContent = "Current: "+ data.main.temp + "\u00B0 F"
        div.appendChild(p2)

        var p3 = document.createElement('p')
        p3.textContent = "Feels Like: "+ data.main.feels_like+ "\u00B0 F"
        div.appendChild(p3)

        weatherWidget.appendChild(div)
    })
    
    .catch(function(err){

        var p4 = document.createElement('h2')
        p4.textContent = "Location Not Found"

        document.getElementById("weather-widget").appendChild(p4);

    })
}

