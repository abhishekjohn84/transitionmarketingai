import React, { useState } from 'react'
import './App.css'
import { AboutPage, ServicesPage, CaseStudiesPage, BlogPage, ContactPage, FAQPage, HowItWorksPage } from './pages.jsx'
import { Dashboard } from './Dashboard.jsx'

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    alert(`Thank you for your interest! We'll contact you within 24 hours to discuss your marketing automation needs and provide a custom strategy.`)
    setShowSignupModal(false)
  }

  // Navigation function
  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  // Render different pages based on currentPage state
  if (currentPage === 'dashboard') return <Dashboard user={user} />
  if (currentPage === 'about') return <AboutPage />
  if (currentPage === 'services') return <ServicesPage />
  if (currentPage === 'case-studies') return <CaseStudiesPage />
  if (currentPage === 'blog') return <BlogPage />
  if (currentPage === 'contact') return <ContactPage />
  if (currentPage === 'faq') return <FAQPage />
  if (currentPage === 'how-it-works') return <HowItWorksPage />

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">📈</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GROWTHFLOW</h1>
                <p className="text-sm text-gray-600">Automate Your Growth</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</button>
              <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</button>
              <button onClick={() => navigateTo('services')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Services</button>
              <button onClick={() => navigateTo('case-studies')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Case Studies</button>
              <button onClick={() => navigateTo('faq')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">FAQ</button>
              <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</button>
            </nav>
            <div className="flex space-x-3">
              {!isLoggedIn ? (
                <>
                  <button 
                    onClick={() => setShowLoginModal(true)}
                    className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setShowSignupModal(true)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Get Free Consultation
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                  >
                    Dashboard
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                🚀 Complete Marketing Automation for Indian Businesses
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Automate Your Marketing,{' '}
                <span className="text-orange-500">Accelerate Your Growth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The complete marketing automation platform built specifically for Indian businesses. 
                Email campaigns, social media management, lead generation, and CRM - all in one place.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Trusted by <span className="font-semibold text-orange-500">500+</span> Indian businesses
              </div>
            </div>
            
            {/* Simplified Consultation Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Free Consultation</h3>
                <p className="text-sm text-gray-600">
                  Get a callback within <span className="font-semibold text-orange-500">24 hours</span> from our growth consultants
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services You're Interested In:</label>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <label key={service.id} className="flex items-center text-sm">
                        <input 
                          type="checkbox" 
                          name="services"
                          value={service.id}
                          className="mr-2 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-gray-700">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
                >
                  Get Free Consultation
                </button>
                
                <div className="text-center text-xs text-gray-500">
                  <div className="mb-1">
                    <span className="font-semibold text-gray-700">No credit card required</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
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
                review: "GROWTHFLOW transformed our lead generation. We're now getting 300% more qualified leads and our sales team is much more efficient.",
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
            Join 500+ Indian businesses that have transformed their marketing with GROWTHFLOW
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowSignupModal(true)}
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
                  <h3 className="text-xl font-bold">GROWTHFLOW</h3>
                  <p className="text-sm text-gray-400">Automate Your Growth</p>
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
            <p className="text-gray-400">© 2024 GROWTHFLOW. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm">Terms of Service</button>
              <button className="text-gray-400 hover:text-white text-sm">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Start Your Free Trial</h2>
              <button 
                onClick={() => setShowSignupModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Start your 14-day free trial. No credit card required.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input 
                  type="text" 
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Services You're Interested In</label>
                <div className="space-y-2">
                  {services.map((service) => (
                    <label key={service.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mr-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{service.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
              >
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const email = formData.get('email')
              const password = formData.get('password')
              
              // Simple demo authentication - in real app, this would call your backend
              if (email && password) {
                setUser({
                  name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
                  email: email,
                  company: 'Demo Company'
                })
                setIsLoggedIn(true)
                setShowLoginModal(false)
                setCurrentPage('dashboard')
              }
            }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <button type="button" className="text-sm text-orange-500 hover:text-orange-600">
                  Forgot password?
                </button>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
              >
                Sign In
              </button>
              
              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <button 
                  type="button"
                  onClick={() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                  }}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Updated Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
              <button 
                onClick={() => setShowSignupModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const name = formData.get('name')
              const email = formData.get('email')
              const company = formData.get('company')
              
              // Simple demo registration - in real app, this would call your backend
              if (name && email) {
                setUser({
                  name: name,
                  email: email,
                  company: company || 'Your Company'
                })
                setIsLoggedIn(true)
                setShowSignupModal(false)
                setCurrentPage('dashboard')
                alert('Welcome to GROWTHFLOW! Your account has been created successfully.')
              }
            }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label className="flex items-center">
                  <input type="checkbox" required className="mr-2 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm text-gray-700">
                    I agree to the <button type="button" className="text-orange-500 hover:text-orange-600">Terms of Service</button> and <button type="button" className="text-orange-500 hover:text-orange-600">Privacy Policy</button>
                  </span>
                </label>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg"
              >
                Create Account
              </button>
              
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <button 
                  type="button"
                  onClick={() => {
                    setShowSignupModal(false)
                    setShowLoginModal(true)
                  }}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

