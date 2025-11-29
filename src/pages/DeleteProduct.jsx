import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import '../styles/App.css'

const DeleteProduct = ({ user }) => {
  const navigate = useNavigate()

  const handleDelete = (productId) => {
    // In real app, send delete request to backend
    alert(`Product ${productId} deleted successfully!`)
  }

  return (
    <div>
      <nav className="navbar">
        <button 
          onClick={() => navigate(-1)}
          className="btn btn-secondary"
          style={{ marginRight: 'auto' }}
        >
          ← Back
        </button>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>

      <div className="container">
        <h1 style={{ textAlign: 'center', margin: '30px 0' }}>Manage Products</h1>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger"
                  style={{ width: '100%' }}
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct