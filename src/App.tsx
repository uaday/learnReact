export default function App() {
	return (
		<div>
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
					<li
						style={{
							padding: "8px 16px",
							borderRadius: "5px",
							transition: "background-color 0.3s",
							fontWeight: "bold",
						}}
						onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
						onMouseLeave={(e) =>
							(e.target.style.backgroundColor = "transparent")
						}
					>
						Home
					</li>

					<li
						style={{
							padding: "8px 16px",
							borderRadius: "5px",
							transition: "background-color 0.3s",
							fontWeight: "bold",
						}}
						onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
						onMouseLeave={(e) =>
							(e.target.style.backgroundColor = "transparent")
						}
					>
						About
					</li>

					<li
						style={{
							padding: "8px 16px",
							borderRadius: "5px",
							transition: "background-color 0.3s",
							fontWeight: "bold",
						}}
						onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
						onMouseLeave={(e) =>
							(e.target.style.backgroundColor = "transparent")
						}
					>
						Sign in / Sign up
					</li>
				</ul>
			</div>
			<div className="Sliders">
				<img
					src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt="logo"
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
			<div className="content">
				<h1>Content</h1>
			</div>
			<div
				className="cityList"
				style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
			>
				<div style={{ border: "1px solid white", padding: "10px" }}>Dhaka</div>
				<div style={{ border: "1px solid white", padding: "10px" }}>
					Cumilla
				</div>
				<div style={{ border: "1px solid white", padding: "10px" }}>
					Narayangonj
				</div>
				<div style={{ border: "1px solid white", padding: "10px" }}>Sylhet</div>
			</div>
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
		</div>
	);
}
