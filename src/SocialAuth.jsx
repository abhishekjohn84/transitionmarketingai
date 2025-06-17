// Enhanced Authentication Component with Social Media Login
import React, { useState } from 'react'

const SocialAuthButtons = ({ onSocialLogin, isSignup = false }) => {
  const handleSocialLogin = (provider) => {
    // In a real implementation, this would integrate with OAuth providers
    // For demo purposes, we'll simulate successful social login
    const mockUser = {
      name: `Demo User (${provider})`,
      email: `demo@${provider.toLowerCase()}.com`,
      company: 'Demo Company',
      provider: provider,
      avatar: `https://ui-avatars.io/api/?name=Demo+User&background=f97316&color=fff`
    }
    
    onSocialLogin(mockUser)
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            {isSignup ? 'Or sign up with' : 'Or sign in with'}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSocialLogin('Google')}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>
        
        <button
          type="button"
          onClick={() => handleSocialLogin('Facebook')}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleSocialLogin('Apple')}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 8.025.044 6.979.207 5.934.37 5.226.648 4.61 1.014c-.616.366-1.138.854-1.504 1.47C2.74 3.1 2.462 3.808 2.299 4.854 2.136 5.9 2.092 6.271 2.092 9.892s.044 3.992.207 5.038c.163 1.046.441 1.754.807 2.37.366.616.854 1.138 1.47 1.504.616.366 1.324.644 2.37.807 1.046.163 1.417.207 5.038.207s3.992-.044 5.038-.207c1.046-.163 1.754-.441 2.37-.807.616-.366 1.138-.854 1.504-1.47.366-.616.644-1.324.807-2.37.163-1.046.207-1.417.207-5.038s-.044-3.992-.207-5.038c-.163-1.046-.441-1.754-.807-2.37-.366-.616-.854-1.138-1.47-1.504C17.754 2.74 17.046 2.462 16 2.299 14.954 2.136 14.583 2.092 10.962 2.092zm0 1.838c3.581 0 4.002.015 5.415.207.906.041 1.398.191 1.726.318.434.169.744.371 1.069.696.325.325.527.635.696 1.069.127.328.277.82.318 1.726.192 1.413.207 1.834.207 5.415s-.015 4.002-.207 5.415c-.041.906-.191 1.398-.318 1.726-.169.434-.371.744-.696 1.069-.325.325-.635.527-1.069.696-.328.127-.82.277-1.726.318-1.413.192-1.834.207-5.415.207s-4.002-.015-5.415-.207c-.906-.041-1.398-.191-1.726-.318-.434-.169-.744-.371-1.069-.696-.325-.325-.527-.635-.696-1.069-.127-.328-.277-.82-.318-1.726-.192-1.413-.207-1.834-.207-5.415s.015-4.002.207-5.415c.041-.906.191-1.398.318-1.726.169-.434.371-.744.696-1.069.325-.325.635-.527 1.069-.696.328-.127.82-.277 1.726-.318 1.413-.192 1.834-.207 5.415-.207z"/>
          </svg>
          Apple
        </button>
        
        <button
          type="button"
          onClick={() => handleSocialLogin('Microsoft')}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#F25022" d="M0 0h11.377v11.372H0z"/>
            <path fill="#00A4EF" d="M12.623 0H24v11.372H12.623z"/>
            <path fill="#7FBA00" d="M0 12.628h11.377V24H0z"/>
            <path fill="#FFB900" d="M12.623 12.628H24V24H12.623z"/>
          </svg>
          Microsoft
        </button>
      </div>
    </div>
  )
}

export { SocialAuthButtons }

