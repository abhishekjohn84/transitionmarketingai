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
import Publisher from './pages/Publisher.jsx'

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // API Configuration
  const API_BASE = 'https://vgh0i1cj33x7.manus.space/api'

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
      } else {
        alert('Login failed: ' + data.error)
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed')
    }
  }

  const handleEmailSignup = async (email, password, name, company) => {
    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          full_name: name, 
          email: email, 
          company_name: company,
          password: password 
        })
      })

      const data = await response.json()
      
      if (response.ok) {
        setUser(data.user)
        setIsLoggedIn(true)
        setShowSignupModal(false)
        setCurrentPage('dashboard')
        alert(`Welcome to T R A N S I T I O N  M A R K E T I N G  A I! Your account has been created successfully.`)
      } else {
        alert('Registration failed: ' + data.error)
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('Registration failed')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE}/auth/logout`, { method: 'POST' })
    } catch (error) {
      console.error('Logout error:', error)
    }
    
    setUser(null)
    setIsLoggedIn(false)
    setCurrentPage('home')
  }

  const services = [
    {
      id: 'email',
      name: 'Email Automation',
      description: 'Automated email sequences that nurture leads and drive conversions',
      icon: '📧',
      features: ['Drag-and-drop builder', 'Smart segmentation', 'A/B testing', 'Performance analytics']
    },
    {
      id: 'social',
      name: 'Social Media Management',
      description: 'Schedule, publish, and analyze your social media presence across platforms',
      icon: '📱',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement tracking', 'Hashtag optimization']
    },
    {
      id: 'forms',
      name: 'Smart Forms & Lead Gen',
      description: 'Intelligent forms that capture and qualify leads automatically',
      icon: '📝',
      features: ['Conditional logic', 'Real-time validation', 'Lead scoring', 'CRM integration']
    },
    {
      id: 'lead-gen',
      name: 'Lead Generation Services',
      description: 'Professional lead generation campaigns and strategies',
      icon: '🎯',
      features: ['Target identification', 'Outreach campaigns', 'Lead qualification', 'Conversion optimization']
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    // Collect selected services
    const services = []
    if (data['marketing-automation']) services.push('Marketing Automation')
    if (data['lead-generation']) services.push('Lead Generation Systems')
    if (data['custom-development']) services.push('Custom Development')
    if (data['ai-integration']) services.push('AI Integration Services')
    
    try {
      const response = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          services_interested: services,
          message: data.message || '',
          source: 'website'
        })
      })
      
      if (response.ok) {
        alert(`Thank you ${data.name}! Your consultation request has been submitted successfully. We'll contact you within 24 hours to discuss your marketing automation needs and provide a custom strategy.`)
        e.target.reset() // Clear the form
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your request. Please try again or contact us directly.')
    }
  }

  // Navigation function
  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  // Render different pages based on currentPage state
  if (currentPage === 'dashboard') return <Dashboard user={user} />
  if (currentPage === 'admin') return <Admin onNavigate={navigateTo} />
  if (currentPage === 'about') return <AboutPage />
  if (currentPage === 'services') return <ServicesPage />
  if (currentPage === 'case-studies') return <CaseStudiesPage />
  if (currentPage === 'blog') return <BlogPage />
  if (currentPage === 'contact') return <ContactPage />
  if (currentPage === 'faq') return <FAQPage />
  if (currentPage === 'how-it-works') return <HowItWorksPage />
  if (currentPage === 'login') return <Login onLogin={(userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    navigateTo('dashboard');
  }} onNavigate={navigateTo} />
  if (currentPage === 'signup') return <Signup onSignup={(userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    navigateTo('dashboard');
  }} onNavigate={navigateTo} />
  if (currentPage === 'crm') return <CRM user={user} onNavigate={navigateTo} />
  if (currentPage === 'publisher') return <Publisher onNavigate={navigateTo} />

  return (
    <div className="min-h-screen bg-white">
      {/* Publisher Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-sm font-medium">🚀 STAGING ENVIRONMENT</span>
              <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">demo.transitionmarketingai.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://publisher.transitionmarketingai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Publish to Production</span>
              </a>
              <button 
                onClick={() => navigateTo('publisher')}
                className="bg-white text-orange-500 hover:bg-gray-50 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Publisher Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - adjusted for sticky publisher header */}
      <header className="bg-white shadow-sm border-b sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 tracking-widest">T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I</h1>
                <p className="text-xs text-gray-600">AI-Powered Business Transformation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Home</button>
              <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">About</button>
              <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Services</button>
              <button onClick={() => navigateTo('case-studies')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Case Studies</button>
              <button onClick={() => navigateTo('faq')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">FAQ</button>
              <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm">Contact</button>
            </nav>

            {/* Mobile/Tablet Hamburger Menu */}
            <div className="lg:hidden">
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {!isLoggedIn ? (
                <>
                  <button 
                    onClick={() => navigateTo('login')}
                    className="text-orange-500 border border-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors font-medium text-sm"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => navigateTo('signup')}
                    className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                  >
                    Get Free Consultation
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => navigateTo('crm')}
                    className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                  >
                    CRM Dashboard
                  </button>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">Welcome, {user?.name || 'User'}</span>
                    <button 
                      onClick={() => {
                        setIsLoggedIn(false)
                        setUser(null)
                        setCurrentPage('home')
                      }}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowMobileMenu(false)}>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="p-4 space-y-4">
              <button 
                onClick={() => { navigateTo('home'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => { navigateTo('about'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => { navigateTo('services'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => { navigateTo('case-studies'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Case Studies
              </button>
              <button 
                onClick={() => { navigateTo('faq'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => { navigateTo('contact'); setShowMobileMenu(false); }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Contact
              </button>
              
              <div className="border-t pt-4 space-y-3">
                {!isLoggedIn ? (
                  <>
                    <button 
                      onClick={() => { navigateTo('login'); setShowMobileMenu(false); }}
                      className="block w-full text-center px-4 py-3 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => { navigateTo('signup'); setShowMobileMenu(false); }}
                      className="block w-full text-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Get Free Consultation
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => { navigateTo('crm'); setShowMobileMenu(false); }}
                      className="block w-full text-center px-4 py-3 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                    >
                      CRM Dashboard
                    </button>
                    <div className="px-4 py-3 text-center text-gray-700">
                      Welcome, {user?.name || 'User'}
                    </div>
                    <button 
                      onClick={() => {
                        setIsLoggedIn(false)
                        setUser(null)
                        setCurrentPage('home')
                        setShowMobileMenu(false)
                      }}
                      className="block w-full text-center px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                🤖 AI-Powered Digital Transformation for Indian Businesses
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Transition to AI-Powered{' '}
                <span className="text-orange-500">Marketing Automation</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Help your business transition to AI-powered marketing automation and custom development solutions. 
                From marketing automation to custom websites, mobile apps, and intelligent systems - we build it all.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>24hr response</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Trusted by <span className="font-semibold text-orange-500">100+</span> Indian businesses transitioning to AI
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-gray-100 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Get Free AI Consultation</h3>
                <p className="text-sm text-gray-600">
                  Get a callback within <span className="font-semibold text-orange-500">24 hours</span> from our AI transformation experts
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Services You're Interested In:</label>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="marketing-automation"
                        className="mr-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Marketing Automation</span>
                    </label>
                    <label className="flex items-center text-sm">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="lead-generation"
                        className="mr-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Lead Generation Systems</span>
                    </label>
                    <label className="flex items-center text-sm">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="custom-development"
                        className="mr-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Custom Development</span>
                    </label>
                    <label className="flex items-center text-sm">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="ai-integration"
                        className="mr-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">AI Integration Services</span>
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
                >
                  Get Free Consultation
                </button>
                
                <div className="text-center text-sm text-gray-500">
                  <div className="mb-2">
                    <span className="font-semibold text-gray-700">No credit card required</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span>🔒 Secure</span>
                    <span>📞 24hr Response</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-orange-500">Grow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful marketing automation tools designed specifically for Indian businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for <span className="text-orange-500">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for businesses across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Real Estate', icon: '🏢', growth: '+300%' },
              { name: 'Healthcare', icon: '❤️', growth: '+250%' },
              { name: 'E-commerce', icon: '🛒', growth: '+400%' },
              { name: 'Education', icon: '📚', growth: '+200%' },
              { name: 'Finance', icon: '💰', growth: '+180%' },
              { name: 'Technology', icon: '💻', growth: '+350%' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-orange-500 font-semibold">{industry.growth}</div>
                <div className="text-xs text-gray-500">Avg. Growth</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How <span className="text-orange-500">T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process to transform your marketing and accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "📞",
                title: "Free Consultation",
                description: "Schedule a 30-minute consultation where we analyze your current marketing and identify growth opportunities.",
                details: ["Business analysis", "Goal identification", "Strategy discussion", "Custom recommendations"]
              },
              {
                step: "02", 
                icon: "📋",
                title: "Custom Strategy",
                description: "We create a tailored marketing automation strategy based on your specific business needs and goals.",
                details: ["Personalized plan", "Service selection", "Timeline creation", "ROI projections"]
              },
              {
                step: "03",
                icon: "⚙️", 
                title: "Implementation",
                description: "Our experts set up and configure your marketing automation systems for maximum effectiveness.",
                details: ["System setup", "Integration", "Content creation", "Testing & optimization"]
              },
              {
                step: "04",
                icon: "📈",
                title: "Growth & Support",
                description: "Watch your business grow while we provide ongoing support and optimization to maximize results.",
                details: ["Performance monitoring", "Continuous optimization", "Regular reporting", "Dedicated support"]
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-orange-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl p-8 text-center relative z-10 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-2 text-sm text-gray-500">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <span className="text-orange-500 mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Join 500+ Indian businesses that have transformed their marketing with T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I
              </p>
              <button 
                onClick={() => navigateTo('signup')}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
              >
                Get Your Free Consultation
              </button>
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  No credit card required
                </span>
                <span className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  24-hour response
                </span>
                <span className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  Custom strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-orange-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Kumar Real Estate",
                review: "T R A N S I T I O N  M A R K E T I N G  A I transformed our lead generation. We're now getting 300% more qualified leads and our sales team is much more efficient.",
                rating: 5,
                result: "300% more leads"
              },
              {
                name: "Dr. Priya Sharma",
                company: "Sharma Healthcare",
                review: "The automation saved us 20 hours per week on patient communication. Our appointment booking rate increased by 150%.",
                rating: 5,
                result: "20 hours saved weekly"
              },
              {
                name: "Amit Patel",
                company: "Patel E-commerce",
                review: "Our social media engagement grew by 200% and online sales increased by 180%. The ROI has been incredible.",
                rating: 5,
                result: "200% social growth"
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600">{review.company}</div>
                  <div className="text-orange-500 font-semibold mt-2">{review.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 500+ Indian businesses that have transformed their marketing with T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('signup')}
              className="bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-widest">T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I</h3>
                  <p className="text-sm text-gray-400">AI-Powered Business Transformation</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                The complete marketing automation platform built specifically for Indian businesses.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white">📘</button>
                <button className="text-gray-400 hover:text-white">🐦</button>
                <button className="text-gray-400 hover:text-white">💼</button>
                <button className="text-gray-400 hover:text-white">📷</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigateTo('services')} className="hover:text-white">Services</button></li>
                <li><button onClick={() => navigateTo('case-studies')} className="hover:text-white">Case Studies</button></li>
                <li><button className="hover:text-white">Integrations</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigateTo('about')} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => navigateTo('blog')} className="hover:text-white">Blog</button></li>
                <li><button className="hover:text-white">Careers</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Help Center</button></li>
                <li><button className="hover:text-white">Documentation</button></li>
                <li><button className="hover:text-white">API Reference</button></li>
                <li><button className="hover:text-white">Status</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm">Terms of Service</button>
              <button className="text-gray-400 hover:text-white text-sm">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

