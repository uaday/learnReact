import React from "react";

function MenuItem({ name }: { name: string }) {
	return (
		<li
			style={{
				padding: "8px 16px",
				borderRadius: "5px",
				transition: "background-color 0.3s",
				fontWeight: "bold",
			}}
			//@ts-ignore
			onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
			//@ts-ignore
			onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
		>
			{name}
		</li>
	);
}

export default MenuItem;
