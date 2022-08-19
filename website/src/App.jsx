import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/reset.css";
import "./assets/css/main.css";

import { Home } from "./routes/Home";
import { About } from "./routes/About";

export function App() {
	return (
		<Routes>
			<Route path="/about" element={ <About /> } />
			
			<Route path="*" element={ <Home /> } />
		</Routes>
	);
}

export default App;