import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/App.css'

const ArtisanDashboard = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">Artisan Dashboard</div>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>

      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginTop: '50px'
        }}>
          <Link 
            to="/add-product" 
            className="btn btn-primary"
            style={{ 
              padding: '40px', 
              fontSize: '20px', 
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            Add Product
          </Link>
          
          <Link 
            to="/delete-product" 
            className="btn btn-secondary"
            style={{ 
              padding: '40px', 
              fontSize: '20px', 
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            Delete Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArtisanDashboard