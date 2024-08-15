const apiKey = 'ccd5734b141462c46b171fd63a3f7282';
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${apiKey}&units=metric`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const weatherinfo = `
//          <h2>${data.name}</h2>
//          <p>${data.main.temp}°C</p>
//          <p>${data.weather[0].description}</p>
//         `;
//         document.getElementById('weather-info').innerHTML = weatherinfo
//     })
//     .catch(
//         err => console.log(err)
//     );

document.getElementById('search-btn').addEventListener('click',()=>{
    const city = document.getElementById('city-name').value;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            let forecastHtml = `<h2>${data.city.name}</h2>`;
            data.list.forEach((item, index) => {
                if (index % 8 === 0) { // Display data every 24 hours
                    const weatherIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                    forecastHtml += `
                        <div>
                            <h3>${new Date(item.dt_txt).toLocaleDateString()}</h3>
                            <img src="${weatherIcon}" alt="Weather Icon">
                            <p>${item.main.temp}°C</p>
                            <p>${item.weather[0].description}</p>
                        </div>
                    `;
                }
            });
            document.getElementById('weather-info').innerHTML = forecastHtml;
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
        });
    // fetch(apiUrl)
    //     .then(res => res.json())
    //     .then( data =>
    //         {
    //             const weatherinfo = `
    //             <h2>${data.name}</h2>
    //             <p>${data.main.temp}°C</p>
    //             <p>${data.weather[0].description}</p>
    //             `;
    //             document.getElementById('weather-info').innerHTML = weatherinfo
    //         }
    //     )
    //     .catch(
    //         err => {
    //             console.error(err);
    //         }
    //     )
});

