import React from "react";
import Button, { ButtonVarient } from "../Button/button";

function Footer() {
	return (
		<div
			className="footer"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px",
			}}
		>
			<div className="copyright">
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</div>
			<Button varient={ButtonVarient.primary}>Button</Button>
			<div className="quickLinks">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
