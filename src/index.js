import './index.css'
import App from './App'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Commerce from './pages/Commerce'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/commerce/:name" element={<Commerce />} />
        <Route path="/product/:name" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
