const API_KEY = "8480113c964e859948edfd477df75f00"; // Replace with your actual API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const wheather = {
  async getWeather(latitude, longitude) {
    try {
      const response = await fetch(
        `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      return {
        location: data.name,
        temperature: data.main.temp,
        // Extract other relevant weather data
      };
    } catch (error) {
      throw new Error("Error fetching weather data:", error);
    }
  },
};

export default wheather;
