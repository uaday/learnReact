import React from "react";

function MenuWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ul
			style={{
				listStyleType: "none",
				display: "flex",
				gap: "20px",
				padding: "10px 20px",
				margin: 0,
				fontSize: "18px",
				cursor: "pointer",
			}}
		>
			{children}
		</ul>
	);
}

export default MenuWrapper;
