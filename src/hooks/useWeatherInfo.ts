import { useState, useEffect } from "react";

interface WeatherInfo {
	temperature: number;
	location: string;
	description: string;
	error?: string;
}

const useWeatherInfo = (lat: number, lon: number): WeatherInfo | null => {
	const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!lat || !lon) return;

		const fetchWeather = async () => {
			try {
				const apiKey = "a98d0d99459f464e9467a73d7daf1fee";
				const response = await fetch(
					`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`
				);

				if (!response.ok) {
					throw new Error(`Error: ${response.status} - ${response.statusText}`);
				}

				const data = await response.json();

				if (data && data.count > 0 && data.data.length > 0) {
					const weather = data.data[0];
					setWeatherData({
						temperature: weather.temp,
						location: `${weather.city_name}, ${weather.country_code}`,
						description: weather.weather.description,
					});
				} else {
					throw new Error("No weather data found.");
				}
			} catch (err: any) {
				setError(
					err.message || "An error occurred while fetching weather data."
				);
				setWeatherData(null);
			}
		};

		fetchWeather();
	}, [lat, lon]);

	return weatherData
		? { ...weatherData, error: error || undefined }
		: {
				temperature: NaN,
				location: "",
				description: "",
				error: error || undefined,
		  };
};

export default useWeatherInfo;
