import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

const Checkout = ({ user, cart, setCart }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pincode: '',
    paymentMethod: 'credit-card'
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setCart([])
      navigate('/customer-home')
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--primary-brown)', marginBottom: '20px' }}>
            Order Confirmed Successfully!
          </h2>
          <p>Thank you for supporting tribal artisans!</p>
        </div>
      </div>
    )
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Checkout Form */}
          <div className="form-container" style={{ margin: 0 }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid var(--light-brown)' }}
                >
                  <option value="credit-card">Credit Card</option>
                  <option value="debit-card">Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Confirm Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <hr style={{ margin: '20px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout