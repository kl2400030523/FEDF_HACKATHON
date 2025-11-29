import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

const AddProduct = ({ user }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, send product data to backend
    alert('Product added successfully!')
    navigate('/artisan-dashboard')
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
        <div className="form-container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Product Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe your product and its cultural significance..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct