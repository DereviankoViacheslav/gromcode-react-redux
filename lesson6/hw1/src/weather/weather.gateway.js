const baseUrl = 'https://5e4e9b9e6272aa0014230d88.mockapi.io/api/v1/cities';

export function fetchWeatherData() {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error();
    });
}