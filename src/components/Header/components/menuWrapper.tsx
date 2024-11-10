import React from "react";

function MenuWrapper({ children }: any) {
	return (
		<ul
			style={{
				listStyleType: "none",
				display: "flex",
				gap: "20px", // spacing between menu items
				padding: "10px 20px",
				margin: 0,
				fontSize: "18px",
				fontFamily: "Arial, sans-serif",
				cursor: "pointer",
			}}
		>
			{children}
		</ul>
	);
}

export default MenuWrapper;
