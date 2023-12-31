import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import CategoriesPage from './pages/CategoriesPage'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Router>
       <Routes>
        <Route path="/" element={<CategoriesPage/>} />
        </Routes>
     </Router>,
    document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
