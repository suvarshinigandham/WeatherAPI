function getWeather() {

  let city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // 🔴 Replace with your real API key
  let apiKey ="ede84e21ddd02add6ced39ddbde0a9bc";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {

      let temp = data.main.temp;
      let weather = data.weather[0].description;
      let humidity = data.main.humidity;

      document.getElementById("result").innerHTML = `
        <p>🌡 Temperature: ${temp} °C</p>
        <p>🌥 Weather: ${weather}</p>
        <p>💧 Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      document.getElementById("result").innerHTML =
        `<p style="color:red;">⚠ ${error.message}</p>`;
    });
}