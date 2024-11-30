import React, { useState } from "react";
import Button from "../Button/button";

function ToggleContent() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div>
			<Button onClick={() => setIsVisible(!isVisible)}>
				{isVisible ? "Hide" : "Show"} Content
			</Button>
			{isVisible && <p>This is the dynamic content!</p>}
		</div>
	);
}

export default ToggleContent;
