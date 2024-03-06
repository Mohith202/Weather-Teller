const container = document.querySelector('.container');
const search = document.querySelector('.search');
const lowerfoot = document.querySelector('.lowerfoot');
const error404 = document.querySelector('.not-found');


search.addEventListener('click', () => {
    const cityname = document.querySelector('.lat').value;
    const APIkey = 'a0ee82a32401cd3bf82a76384e7fe8e7';

    if (cityname === ""){
        error404.style.display = "block";
        return error404.innerHTML="Pleaze enter a City name";
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`).then(response => response.json()).then(json => {
        if (json.cod === '404') {
            // container.style.height = '50vh';

            lowerfoot.style.display = 'none';
            error404.style.display = 'block';
            error404.innerHTML='Plz Enter Correct city name';
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/404.png";
            return;
        }

        lowerfoot.style.display = 'flex';

        if (json.weather[0].description==="clear sky"){
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/clear.png";
            console.log("object")
        }
        if (json.weather[0].description==="broken clouds"){
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/rain.png";
        }
        if (json.weather[0].description==="light rain"){
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/rain.png";
        }
        if (json.weather[0].description==="overcast clouds"){
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/snow.png";
        }
        if (json.weather[0].description==="few clouds"){
            document.getElementById('image').style.display="block";
            document.getElementById('image').src="img/cloud.png";
        }
        error404.style.display = "block";
        container.style.height = '90vh';
        const image = document.querySelector('img');
        const temperature = document.querySelector('.temperature span');
        const wind = document.querySelector('.wind-speed span');
        const humidity = document.querySelector('.humidity span');

        temperature.innerHTML = `${parseInt(json.main.temp)}
        <span> K </span>`;
        humidity.innerHTML = `${json.main.humidity}%`;
        error404.innerHTML = `${json.weather[0].description}`;
        wind.innerHTML = `${json.wind.speed}Km/hr`;
    }
    )
    
 })
