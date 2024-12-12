import React from "react";
import MenuItem from "./components/menuItem";
import MenuWrapper from "./components/menuWrapper";

function Header() {
	return (
		<div
			className="header"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100vw",
			}}
		>
			{/* logo */}
			<img
				src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
				alt="logo"
				style={{
					width: "50px",
					height: "50px",
				}}
			/>
			<MenuWrapper>
				<MenuItem name="Home" />
				<MenuItem name="About" />
				<MenuItem name="Sign In / Sign up" />
			</MenuWrapper>
		</div>
	);
}

export default Header;
