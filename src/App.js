//App.js

import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todo'

function App() {
	const headStyle = {
		textAlign: 'center',
	}
	return (
		<div>
			<h1 style={headStyle}>Todo List</h1>
			<Routes>
				<Route path='/' element={<Todo />}></Route>
			</Routes>
		</div>
	)
}

export default App
