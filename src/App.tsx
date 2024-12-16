import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter, Route, Routes } from "react-router";
import Todo from "./pages/todo/todo";
import History from "./pages/history";
import Welcome from "./components/Welcome/welcome";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Welcome />
				<Routes>
					<Route path="/" element={<Todo />} />
					<Route path="/todo" element={<Todo />} />
					<Route path="/history" element={<History />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
