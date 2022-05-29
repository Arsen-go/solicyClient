import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Table from './components/Table/index.js';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Navigate to="/" replace={true} />} />
				<Route path="/account" element={<p>s</p>} />
				<Route path="/" element={<Table />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
