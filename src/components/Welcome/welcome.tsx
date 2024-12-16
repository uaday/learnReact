import useGeolocation from "@/hooks/useGeolocation";
import useWeatherInfo from "@/hooks/useWeatherInfo";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React from "react";
import { Loader } from "lucide-react";

function Welcome() {
	const {
		loading: geoLoading,
		error: geoError,
		data: geoData,
	} = useGeolocation({});
	const { latitude: lat, longitude: lon } = geoData as any;

	const weather = useWeatherInfo(lat || null, lon || null);

	return (
		<div className="fixed mt-4 left-4 w-72">
			<Card className="shadow-lg">
				<CardHeader>
					<CardTitle className="text-base">Hi Sudipta!</CardTitle>
				</CardHeader>
				<CardContent>
					{geoLoading || !geoData ? (
						<Loader className="m-auto" />
					) : geoError ? (
						<Alert variant="destructive">
							<AlertTitle>Geolocation Error</AlertTitle>
							<AlertDescription>
								{geoError.message || "Unable to fetch your location."}
							</AlertDescription>
						</Alert>
					) : weather?.error ? (
						<Alert variant="destructive">
							<AlertTitle>Weather Error</AlertTitle>
							<AlertDescription>{weather.error}</AlertDescription>
						</Alert>
					) : weather ? (
						<div className="space-y-2">
							<p className="text-sm">
								<strong>Location:</strong> {weather.location}
							</p>
							<p className="text-sm">
								<strong>Temperature:</strong> {weather.temperature}°C
							</p>
							<p className="text-sm">
								<strong>Condition:</strong> {weather.description}
							</p>
						</div>
					) : (
						<Loader className="m-auto" />
					)}
				</CardContent>
			</Card>
		</div>
	);
}

export default Welcome;
