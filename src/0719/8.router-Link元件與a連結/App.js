import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      {/* 連結到各頁面連結 */}
      <h3>Link元件</h3>
      <Link to="/">Home</Link>
      <br />
      <Link to="about">About</Link>
      <br />
      <Link to="product">Product</Link>
      <br />
      <Link to="login">Login</Link>

      {/* 連結到各頁面連結 */}
      {/* <h3>a連結</h3> */}
      {/* <a href="/">Home</a>
      <br />
      <a href="about">About</a>
      <br />
      <a href="product">Product</a>
      <br />
      <a href="login">Login</a> */}

      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home auth={auth} />} />
        <Route path="about" element={<About auth={auth} />} />
        <Route path="product" element={<Product auth={auth} />} />
        <Route path="login" element={<Login auth={auth} setAuth={setAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
