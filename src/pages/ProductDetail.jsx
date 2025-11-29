import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import '../styles/App.css'

const ProductDetail = ({ user, cart, setCart }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/customer-home')} className="btn btn-primary">
          Return to Home
        </button>
      </div>
    )
  }

  const addToCart = () => {
    setCart([...cart, product])
    alert('Product added to cart!')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Enhanced Navbar */}
      <nav className="navbar">
        <button 
          onClick={() => navigate(-1)}
          className="btn btn-secondary"
          style={{ marginRight: 'auto' }}
        >
          ← Back to Products
        </button>
        <div className="nav-links">
          <Link to="/cart" className="nav-link">
            🛒 Cart ({cart.length})
          </Link>
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            🚪 Logout
          </button>
        </div>
      </nav>

      {/* Product Details */}
      <div className="container">
        <div className="product-detail-container">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          
          {/* Product Info */}
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p style={{ 
              color: 'var(--secondary-brown)', 
              fontSize: '1.3rem',
              marginBottom: '20px'
            }}>
              Crafted by <strong>{product.artisan}</strong>
            </p>
            
            <div style={{
              background: 'var(--light-brown)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '25px'
            }}>
              <p className="product-detail-price">${product.price}</p>
            </div>
            
            <div className="product-detail-description">
              {product.description}
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, var(--cream), white)',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid var(--light-brown)',
              marginBottom: '30px'
            }}>
              <h4 style={{ marginBottom: '15px', color: 'var(--dark-brown)' }}>✨ Product Highlights</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Handcrafted using traditional techniques</li>
                <li>Supports tribal communities</li>
                <li>Eco-friendly and sustainable materials</li>
                <li>Unique piece with cultural significance</li>
              </ul>
            </div>
            
            <button 
              onClick={addToCart}
              className="btn btn-primary"
              style={{ 
                padding: '20px 40px', 
                fontSize: '1.2rem',
                width: '100%'
              }}
            >
              🛒 Add to Cart - ${product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail