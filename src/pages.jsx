import React, { useState } from 'react'

// About Component
const AboutPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-orange-500">GROWTHFLOW</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to help Indian businesses automate their marketing and accelerate their growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            GROWTHFLOW was born from a simple observation: Indian businesses were struggling with fragmented marketing tools 
            that didn't understand their unique needs. We saw businesses juggling multiple platforms, losing leads, 
            and missing growth opportunities.
          </p>
          <p className="text-gray-600 mb-4">
            Our founders, with over 15 years of combined experience in marketing automation and Indian business landscapes, 
            decided to build a solution that would change this. GROWTHFLOW is designed specifically for Indian businesses, 
            with local insights, rupee-based pricing, and personalized support.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve 500+ businesses across India, helping them automate their marketing, 
            generate more leads, and grow their revenue by an average of 127%.
          </p>
        </div>
        <div className="bg-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            To democratize marketing automation for Indian businesses by providing world-class tools with local expertise and support.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">✓</span>
              <span className="text-gray-700">500+ Businesses Served</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">✓</span>
              <span className="text-gray-700">127% Average Revenue Growth</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">✓</span>
              <span className="text-gray-700">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Services Component
const ServicesDetailPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-xl text-gray-600">
          Complete marketing automation solutions for your business growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing Automation</h3>
          <p className="text-gray-600 mb-6">
            Create sophisticated email campaigns that nurture leads and drive conversions automatically.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Drag-and-drop email builder</li>
            <li>• Automated email sequences</li>
            <li>• A/B testing and optimization</li>
            <li>• Personalization and segmentation</li>
            <li>• Detailed analytics and reporting</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Management</h3>
          <p className="text-gray-600 mb-6">
            Schedule, publish, and monitor your social media presence across all platforms.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Multi-platform posting</li>
            <li>• Content calendar management</li>
            <li>• Engagement tracking</li>
            <li>• Social media analytics</li>
            <li>• Automated responses</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Forms & Lead Generation</h3>
          <p className="text-gray-600 mb-6">
            Capture and qualify leads with intelligent forms and automated scoring.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Conditional logic forms</li>
            <li>• Lead scoring algorithms</li>
            <li>• Real-time validation</li>
            <li>• Integration with CRM</li>
            <li>• Conversion optimization</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Generation Services</h3>
          <p className="text-gray-600 mb-6">
            Complete lead generation and nurturing services to grow your customer base.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Target audience identification</li>
            <li>• Outreach campaign management</li>
            <li>• Lead qualification processes</li>
            <li>• Conversion optimization</li>
            <li>• Performance tracking</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

// Case Studies Component
const CaseStudiesPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Success <span className="text-orange-500">Stories</span>
        </h1>
        <p className="text-xl text-gray-600">
          Real results from real businesses using GROWTHFLOW
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kumar Real Estate</h3>
              <p className="text-gray-600 mb-6">
                A growing real estate agency in Mumbai was struggling to manage leads from multiple sources 
                and follow up effectively with potential buyers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">300%</span>
                  <span className="text-gray-700">Increase in qualified leads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">85%</span>
                  <span className="text-gray-700">Reduction in manual follow-up time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">₹50L</span>
                  <span className="text-gray-700">Additional revenue in 6 months</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Implementation Strategy</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated lead capture from website and social media</li>
                <li>• Email nurturing sequences for different property types</li>
                <li>• Lead scoring based on engagement and budget</li>
                <li>• Automated follow-up reminders for sales team</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sharma Healthcare</h3>
              <p className="text-gray-600 mb-6">
                A multi-specialty clinic needed to streamline patient communication and appointment scheduling 
                while maintaining personalized care.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">20 hrs</span>
                  <span className="text-gray-700">Saved per week on admin tasks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">40%</span>
                  <span className="text-gray-700">Increase in appointment bookings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">95%</span>
                  <span className="text-gray-700">Patient satisfaction score</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Implementation Strategy</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated appointment reminders via SMS and email</li>
                <li>• Health tips and educational content campaigns</li>
                <li>• Patient feedback collection and follow-up</li>
                <li>• Referral program automation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patel E-commerce</h3>
              <p className="text-gray-600 mb-6">
                An online fashion retailer wanted to increase customer retention and boost repeat purchases 
                through personalized marketing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">200%</span>
                  <span className="text-gray-700">Growth in social media engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">60%</span>
                  <span className="text-gray-700">Increase in repeat customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">₹25L</span>
                  <span className="text-gray-700">Revenue growth in first quarter</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Implementation Strategy</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Personalized product recommendation emails</li>
                <li>• Abandoned cart recovery campaigns</li>
                <li>• Social media content automation</li>
                <li>• Customer loyalty program integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Blog Component
const BlogPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Marketing <span className="text-orange-500">Insights</span>
        </h1>
        <p className="text-xl text-gray-600">
          Tips, strategies, and insights to grow your business
        </p>
      </div>

      <div className="space-y-8">
        <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Email Marketing</span>
            <span className="text-gray-500 text-sm">December 15, 2024</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            10 Email Marketing Strategies That Actually Work for Indian Businesses
          </h2>
          <p className="text-gray-600 mb-4">
            Email marketing remains one of the highest ROI channels for Indian businesses. Learn the proven strategies 
            that our clients use to achieve 40%+ open rates and 15%+ click-through rates.
          </p>
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Read More →
          </button>
        </article>

        <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Lead Generation</span>
            <span className="text-gray-500 text-sm">December 10, 2024</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Generate 300% More Qualified Leads Using Smart Forms
          </h2>
          <p className="text-gray-600 mb-4">
            Traditional contact forms are dead. Learn how smart forms with conditional logic and lead scoring 
            can dramatically improve your lead quality and conversion rates.
          </p>
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Read More →
          </button>
        </article>

        <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Social Media</span>
            <span className="text-gray-500 text-sm">December 5, 2024</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Social Media Automation: Save 20 Hours Per Week Without Losing Engagement
          </h2>
          <p className="text-gray-600 mb-4">
            Discover how to automate your social media presence while maintaining authentic engagement with your audience. 
            Includes templates and scheduling strategies that work.
          </p>
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Read More →
          </button>
        </article>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Want More Marketing Tips?
        </h3>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for weekly insights and strategies
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
)

// Contact Component
const ContactPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-600">
          Ready to automate your growth? Let's talk about your business goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Office Address</h3>
                <p className="text-gray-600">
                  WeWork Galaxy, 43, Residency Road<br />
                  Bangalore, Karnataka 560025<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 80 4567 8900</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-xl">✉️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">hello@growthflow.in</p>
                <p className="text-gray-600">support@growthflow.in</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 text-xl">🕒</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                📘
              </button>
              <button className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                🐦
              </button>
              <button className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                💼
              </button>
              <button className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                📱
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us about your business and how we can help..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

// FAQ Component
const FAQPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about GROWTHFLOW
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What is GROWTHFLOW and how does it work?
          </h3>
          <p className="text-gray-600">
            GROWTHFLOW is a comprehensive marketing automation platform designed specifically for Indian businesses. 
            It combines email marketing, social media management, lead generation, and CRM into one unified platform. 
            Our system automates your marketing workflows, nurtures leads, and helps you scale your business efficiently.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How quickly can I get started with GROWTHFLOW?
          </h3>
          <p className="text-gray-600">
            You can get started immediately! After requesting a consultation, our growth consultants will call you within 24 hours 
            to understand your business needs. Once you're onboarded, our team will help you set up your first campaigns within 
            2-3 business days. No technical expertise required on your end.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What makes GROWTHFLOW different from other marketing tools?
          </h3>
          <p className="text-gray-600">
            GROWTHFLOW is built specifically for the Indian market with local insights, rupee-based pricing, and understanding 
            of Indian business practices. Unlike generic international tools, we provide personalized consultation, 
            hands-on setup assistance, and ongoing support to ensure your success.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Do I need technical knowledge to use GROWTHFLOW?
          </h3>
          <p className="text-gray-600">
            Not at all! GROWTHFLOW is designed for business owners and marketers, not technical experts. 
            Our intuitive interface and dedicated support team ensure you can focus on growing your business 
            while we handle the technical complexities.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What kind of businesses can benefit from GROWTHFLOW?
          </h3>
          <p className="text-gray-600">
            GROWTHFLOW works for businesses of all sizes - from startups to established enterprises. 
            We've successfully helped real estate agencies, healthcare providers, e-commerce stores, 
            educational institutions, and service-based businesses across India automate their marketing and increase revenue.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            How do you ensure data security and privacy?
          </h3>
          <p className="text-gray-600">
            We take data security seriously. All your data is encrypted and stored securely with regular backups. 
            We comply with international data protection standards and never share your business data with third parties. 
            Your customer information and business insights remain completely confidential.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What kind of support do you provide?
          </h3>
          <p className="text-gray-600">
            We provide comprehensive support including initial consultation, platform setup, campaign creation, 
            ongoing optimization, and regular performance reviews. Our dedicated growth consultants are available 
            via phone, email, and WhatsApp to ensure your success.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Can I integrate GROWTHFLOW with my existing tools?
          </h3>
          <p className="text-gray-600">
            Yes! GROWTHFLOW integrates with popular CRM systems, e-commerce platforms, social media accounts, 
            and other business tools you're already using. Our team will help you set up these integrations 
            during the onboarding process.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-8">
          Our growth consultants are here to help you succeed
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          Get Free Consultation
        </button>
      </div>
    </div>
  </div>
)

// How It Works Component
const HowItWorksPage = () => (
  <div className="min-h-screen bg-white">
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
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How <span className="text-orange-500">GROWTHFLOW</span> Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From consultation to growth - here's how we help you automate your marketing and scale your business
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What You Get With <span className="text-orange-500">GROWTHFLOW</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📧 Email Marketing Automation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Drag-and-drop email builder</li>
              <li>• Automated email sequences</li>
              <li>• A/B testing and analytics</li>
              <li>• Personalized campaigns</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Social Media Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-platform posting</li>
              <li>• Content calendar</li>
              <li>• Engagement tracking</li>
              <li>• Performance analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Lead Generation & Scoring</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Smart web forms</li>
              <li>• Lead scoring algorithms</li>
              <li>• Real-time notifications</li>
              <li>• Conversion optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 CRM & Analytics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Customer relationship management</li>
              <li>• Real-time dashboards</li>
              <li>• Performance tracking</li>
              <li>• ROI reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Automate Your Growth?
        </h3>
        <p className="text-gray-600 mb-8">
          Join 500+ Indian businesses already growing with GROWTHFLOW
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          Get Free Consultation
        </button>
      </div>
    </div>
  </div>
)

export { AboutPage, ServicesDetailPage as ServicesPage, CaseStudiesPage, BlogPage, ContactPage, FAQPage, HowItWorksPage }

