import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

const RoleSelection = ({ setUser }) => {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    setUser(prev => ({ ...prev, role }))
    if (role === 'customer') {
      navigate('/customer-home')
    } else if (role === 'artisan') {
      navigate('/artisan-dashboard')
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Choose Your Journey</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--secondary-brown)' }}>
          Select how you'd like to experience tribal handicrafts
        </p>
        
        <div className="role-selection-grid">
          <div 
            className="role-card"
            onClick={() => handleRoleSelect('customer')}
          >
            <h3>👑 Customer</h3>
            <p>Explore and purchase authentic tribal handicrafts from skilled artisans around the world.</p>
            <div style={{ marginTop: '30px' }}>
              <button className="btn btn-primary">
                Enter as Customer
              </button>
            </div>
          </div>
          
          <div 
            className="role-card"
            onClick={() => handleRoleSelect('artisan')}
          >
            <h3>🎨 Artisan</h3>
            <p>Showcase your traditional crafts, manage your products, and connect with global customers.</p>
            <div style={{ marginTop: '30px' }}>
              <button className="btn btn-secondary">
                Enter as Artisan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection