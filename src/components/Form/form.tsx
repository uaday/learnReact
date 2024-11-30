import React, { useState } from "react";
import Button from "../Button/button";

function Form() {
	const [name, setName] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		alert(`Hello, ${name}!`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
}

export default Form;
