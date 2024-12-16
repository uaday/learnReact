import { useState, useEffect } from "react";

export default function useGeolocation(options: any) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<any>();
	const [data, setData] = useState({});

	useEffect(() => {
		const successHandler = (e: any) => {
			setLoading(false);
			setError(null);
			setData(e.coords);
		};
		const errorHandler = (e: any) => {
			setError(e);
			setLoading(false);
		};
		navigator.geolocation.getCurrentPosition(
			successHandler,
			errorHandler,
			options
		);
		const id = navigator.geolocation.watchPosition(
			successHandler,
			errorHandler,
			options
		);
		return () => navigator.geolocation.clearWatch(id);
	}, [options]);

	return { loading, error, data };
}
