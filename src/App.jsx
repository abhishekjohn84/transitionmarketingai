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

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 tracking-widest">T R A N S I T I O N  M A R K E T I N G  A I</h1>
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
                      onClick={handleLogout}
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
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
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
              <button onClick={() => { navigateTo('home'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Home</button>
              <button onClick={() => { navigateTo('about'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">About</button>
              <button onClick={() => { navigateTo('services'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Services</button>
              <button onClick={() => { navigateTo('case-studies'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Case Studies</button>
              <button onClick={() => { navigateTo('faq'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">FAQ</button>
              <button onClick={() => { navigateTo('contact'); setShowMobileMenu(false); }} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg">Contact</button>
              
              <div className="border-t pt-4 space-y-3">
                {!isLoggedIn ? (
                  <>
                    <button onClick={() => { navigateTo('login'); setShowMobileMenu(false); }} className="block w-full text-center px-4 py-3 text-orange-500 border border-orange-500 rounded-lg">Login</button>
                    <button onClick={() => { navigateTo('signup'); setShowMobileMenu(false); }} className="block w-full text-center px-4 py-3 bg-orange-500 text-white rounded-lg">Get Free Consultation</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { navigateTo('crm'); setShowMobileMenu(false); }} className="block w-full text-center px-4 py-3 text-orange-500 border border-orange-500 rounded-lg">CRM Dashboard</button>
                    <div className="px-4 py-3 text-center text-gray-700">Welcome, {user?.name || 'User'}</div>
                    <button onClick={() => { handleLogout(); setShowMobileMenu(false); }} className="block w-full text-center px-4 py-3 text-gray-500 hover:text-gray-700">Logout</button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI-Powered <span className="text-orange-500">Marketing Automation</span> for Indian Businesses
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with intelligent marketing automation that generates more leads, 
                  nurtures customers, and drives growth - all while you focus on what you do best.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateTo('signup')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
                >
                  Get Free Consultation
                </button>
                <button 
                  onClick={() => navigateTo('how-it-works')}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
                >
                  How It Works
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column - Consultation Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                <p className="text-gray-600">Discover how AI can transform your marketing in just 30 minutes</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">Services you're interested in:</p>
                  <div className="grid grid-cols-1 gap-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="marketing-automation" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">Marketing Automation</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="lead-generation" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">Lead Generation Systems</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="custom-development" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">Custom Development</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" name="ai-integration" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-700">AI Integration Services</span>
                    </label>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your business and goals (optional)"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Get My Free Consultation
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive marketing communications from us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Marketing Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate your marketing, generate more leads, and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
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

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('services')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How TRANSITIONMARKETINGAI Works
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to growth - here's how we help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Free Consultation</h3>
              <p className="text-gray-600">
                Request a consultation and get a callback within 24 hours from our growth experts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Strategy Development</h3>
              <p className="text-gray-600">
                We analyze your business and create a custom marketing automation strategy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Setup & Integration</h3>
              <p className="text-gray-600">
                Our team sets up your campaigns, integrations, and automation workflows
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Growth & Optimization</h3>
              <p className="text-gray-600">
                Watch your business grow while we continuously optimize your campaigns
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('how-it-works')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by 500+ Indian Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See the results our clients are achieving with TRANSITIONMARKETINGAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">300%</div>
              <div className="text-gray-600">Average increase in qualified leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">127%</div>
              <div className="text-gray-600">Average revenue growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-gray-600">Reduction in manual tasks</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('case-studies')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Indian businesses already growing with TRANSITIONMARKETINGAI. 
            Get your free consultation today and discover how AI can accelerate your growth.
          </p>
          <button 
            onClick={() => navigateTo('signup')}
            className="bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Get Free Consultation Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold">TRANSITIONMARKETINGAI</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                AI-Powered Business Transformation for Indian businesses
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigateTo('services')} className="hover:text-white">Email Automation</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white">Social Media Management</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white">Lead Generation</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white">CRM Integration</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigateTo('about')} className="hover:text-white">About Us</button></li>
                <li><button onClick={() => navigateTo('case-studies')} className="hover:text-white">Case Studies</button></li>
                <li><button onClick={() => navigateTo('blog')} className="hover:text-white">Blog</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigateTo('faq')} className="hover:text-white">FAQ</button></li>
                <li><button onClick={() => navigateTo('how-it-works')} className="hover:text-white">How It Works</button></li>
                <li><a href="mailto:info@transitionmarketingai.com" className="hover:text-white">Support</a></li>
                <li><a href="tel:+918045678900" className="hover:text-white">+91 80 4567 8900</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 TRANSITIONMARKETINGAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App