import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RoleSelection from './pages/RoleSelection'
import CustomerHome from './pages/CustomerHome'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ArtisanDashboard from './pages/ArtisanDashboard'
import AddProduct from './pages/AddProduct'
import DeleteProduct from './pages/DeleteProduct'
import './styles/App.css'

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role-selection" element={<RoleSelection setUser={setUser} />} />
          <Route path="/customer-home" element={<CustomerHome user={user} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetail user={user} cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart user={user} cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout user={user} cart={cart} setCart={setCart} />} />
          <Route path="/artisan-dashboard" element={<ArtisanDashboard user={user} />} />
          <Route path="/add-product" element={<AddProduct user={user} />} />
          <Route path="/delete-product" element={<DeleteProduct user={user} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App