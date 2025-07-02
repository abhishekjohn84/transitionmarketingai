import React, { useState } from 'react'
import './App.css'
import { AboutPage, ServicesPage, CaseStudiesPage, BlogPage, ContactPage, FAQPage, HowItWorksPage } from './pages.jsx'
import { Dashboard } from './Dashboard.jsx'
import { SocialAuthButtons } from './SocialAuth.jsx'
import AdminPanel from './AdminPanel.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import CRM from './pages/CRM.jsx'
import Admin from './pages/Admin.jsx'

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // Get API URL from environment variables set during deployment
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleSocialLogin = async (userData) => {
    try {
      const response = await fetch(`${API_BASE}/auth/social`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          provider: userData.provider,
          name: userData.name,
          email: userData.email,
          avatar_url: userData.avatar,
          provider_id: userData.provider_id || 'demo_' + Date.now()
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setUser(data.user)
        setIsLoggedIn(true)
        setShowLoginModal(false)
        setShowSignupModal(false)
        setCurrentPage('dashboard')
      } else {
        alert('Social login failed: ' + data.error)
      }
    } catch (error) {
      console.error('Social login error:', error)
      alert('Social login failed')
    }
  }

  const handleEmailLogin = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      
      if (response.ok) {
        setUser(data.user)
        setIsLoggedIn(true)
        setShowLoginModal(false)
        setCurrentPage('dashboard')
      }git add .
