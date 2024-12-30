let API_KEY = "6aa511085aee716fe6e14f4774c9bd37";
let API_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  let city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      let weatherResult = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherResult;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "<p>City not found. Please try again.</p>";
      console.error(error);
    });
}
