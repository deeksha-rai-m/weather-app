const apiKey = "d9a6c999ec17bc813ccceceef562eb98";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").textContent = data.name;
        const iconCode=data.weather[0].icon;
        document.getElementById("weatherIcon").src='https://openweathermap.org/img/wn/${iconCode}@2x.png';
        document.getElementById("temperature").textContent =
            `${data.main.temp} °C`;
        document.getElementById("description").textContent =
            data.weather[0].description;
        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;
        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
    }
}