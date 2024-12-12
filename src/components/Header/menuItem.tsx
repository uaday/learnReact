import React from "react";
import { Link } from "react-router";

function MenuItem({ name, link }: { name: string; link: string }) {
	return (
		<Link to={link}>
			<li
				onMouseEnter={(e) => {
					//@ts-ignore
					e.target.style.backgroundColor = "#f0f0f0";
				}}
				onMouseLeave={(e) => {
					//@ts-ignore
					e.target.style.backgroundColor = "transparent";
				}}
				style={{
					padding: "8px 16px",
					borderRadius: "5px",
					transition: "background-color 0.3s",
					fontWeight: "bold",
				}}
			>
				{name}
			</li>
		</Link>
	);
}

export default MenuItem;
