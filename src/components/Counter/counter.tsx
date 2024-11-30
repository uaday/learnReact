import React, { useState } from "react";
import Button from "../Button/button";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<Button onClick={() => setCount(count + 1)}>Increment</Button>
			<Button onClick={() => setCount(count - 1)}>Decrement</Button>
		</div>
	);
}

export default Counter;
