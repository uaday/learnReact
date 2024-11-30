import { useState } from "react";
import Button, { ButtonVarient } from "./components/Button/button";
import Counter from "./components/Counter/counter";
import DynamicList from "./components/DynamicList/dynamicList";
import Footer from "./components/Footer/footer";
import Form from "./components/Form/form";
import Header from "./components/Header/header";
import ToggleContent from "./components/ToggleContent/toggleContent";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter, Link, Route, Routes } from "react-router";

export default function App() {
	const [currentPage, setCurrentPage] = useState("home");

	return (
		<div>
			{/* <Header />
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

			<div className="button">
				<Button varient={ButtonVarient.secondary}>Button</Button>
				<Button varient={ButtonVarient.outline}>Button</Button>
				<Button varient={ButtonVarient.link}>Button</Button>
				<button style={{ backgroundColor: "green" }}>Button</button>
				<button style={{ backgroundColor: "blue" }}>Button</button>
				<button style={{ backgroundColor: "yellow" }}>Button</button>
			</div>

			<Footer /> */}

			{/* <Counter />
			<Form />
			<ToggleContent />
			<DynamicList /> */}

			<BrowserRouter>
				<div>
					<nav>
						{/* Navigation Links */}
						<Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
						<Link to="/contact">Contact</Link>
					</nav>
					<hr />
					{/* Define Routes */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}
