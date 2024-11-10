import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

export default function App() {
	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	);
}
