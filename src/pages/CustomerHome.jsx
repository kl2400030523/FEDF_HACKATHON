import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { products } from '../data/products'
import '../styles/App.css'

const CustomerHome = ({ user, cart, setCart }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.artisan.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Enhanced Navbar */}
      <nav className="navbar">
        <Link to="/customer-home" className="nav-brand">
          🎪 Tribal Crafts Marketplace
        </Link>
        <div className="nav-links">
          <input
            type="text"
            placeholder="🔍 Search products, artisans, categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <Link to="/customer-home" className="nav-link">
            🏠 Home
          </Link>
          <Link to="/cart" className="nav-link">
            🛒 Cart ({cart.length})
          </Link>
          <button onClick={handleLogout} className="btn btn-secondary">
            🚪 Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--dark-brown), var(--primary-brown))',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '300' }}>
          Discover Authentic Tribal Handicrafts
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Support indigenous artisans and preserve cultural heritage through every purchase
        </p>
      </div>

      {/* Main Content */}
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--dark-brown)', fontWeight: '300' }}>
            Featured Products
          </h2>
          <p style={{ color: 'var(--secondary-brown)', fontSize: '1.1rem' }}>
            Showing {filteredProducts.length} products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <h3 style={{ color: 'var(--secondary-brown)', marginBottom: '20px' }}>No products found</h3>
            <p style={{ color: 'var(--secondary-brown)' }}>Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="artisan-name">By {product.artisan}</p>
                  <p style={{ color: 'var(--secondary-brown)', fontSize: '0.9rem', marginBottom: '15px' }}>
                    {product.category}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="product-price">${product.price}</span>
                    <button 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="btn btn-primary"
                      style={{ padding: '12px 24px' }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerHome