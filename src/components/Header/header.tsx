import React from "react";
import MenuItem from "./menuItem";
import MenuWrapper from "./menuWrapper";

function Header() {
	return (
		<div
			className="header"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100vw",
				background: "#d6d3d2",
				padding: "0px 20px",
			}}
		>
			<h2>My todo App</h2>
			<MenuWrapper>
				<MenuItem name="Home" link="/" />
				<MenuItem name="History" link="/history" />
			</MenuWrapper>
		</div>
	);
}

export default Header;
