// Enhanced Authentication Component with Social Media Login
import React, { useState, useEffect } from 'react';

const SocialAuthButtons = ({ onSocialLogin, isSignup = false }) => {
  const [loading, setLoading] = useState({
    Google: false,
    Facebook: false,
    Apple: false,
    Microsoft: false
  });
  
  // API Configuration
  const API_BASE = 'https://9yhyi3cqnp36.manus.space/api';
  
  // Initialize OAuth providers
  useEffect(() => {
    // Load Google OAuth script
    const loadGoogleScript = () => {
      if (document.getElementById('google-oauth')) return;
      
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.id = 'google-oauth';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: '123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com', // Replace with actual client ID
            callback: handleGoogleResponse
          });
        }
      };
    };
    
    // Load Facebook OAuth script
    const loadFacebookScript = () => {
      if (document.getElementById('facebook-oauth')) return;
      
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.id = 'facebook-oauth';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            appId: '123456789012345', // Replace with actual app ID
            cookie: true,
            xfbml: true,
            version: 'v18.0'
          });
        }
      };
    };
    
    loadGoogleScript();
    loadFacebookScript();
    
    return () => {
      // Cleanup scripts if needed
      const googleScript = document.getElementById('google-oauth');
      const facebookScript = document.getElementById('facebook-oauth');
      
      if (googleScript) googleScript.remove();
      if (facebookScript) facebookScript.remove();
    };
  }, []);
  
  // Handle Google OAuth response
  const handleGoogleResponse = (response) => {
    if (response && response.credential) {
      handleSocialLoginSuccess('Google', response);
    }
  };
  
  // Handle Facebook OAuth response
  const handleFacebookResponse = (response) => {
    if (response && !response.error) {
      handleSocialLoginSuccess('Facebook', response);
    }
  };
  
  // Process successful social login
  const handleSocialLoginSuccess = async (provider, authResponse) => {
    try {
      // In a production environment, send the token to your backend for verification
      // const response = await fetch(`${API_BASE}/auth/${provider.toLowerCase()}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token: authResponse.credential || authResponse.accessToken })
      // });
      // const data = await response.json();
      
      // For demo purposes, we'll simulate successful social login
      const mockUser = {
        name: `Demo User (${provider})`,
        email: `demo@${provider.toLowerCase()}.com`,
        company: 'Demo Company',
        provider: provider,
        provider_id: `demo_${Date.now()}`,
        avatar: `https://ui-avatars.io/api/?name=Demo+User&background=f97316&color=fff`
      };
      
      onSocialLogin(mockUser);
    } catch (error) {
      console.error(`${provider} login processing error:`, error);
      alert(`${provider} login failed. Please try again.`);
    } finally {
      setLoading({ ...loading, [provider]: false });
    }
  };

  // Initiate Google login
  const handleGoogleLogin = () => {
    setLoading({ ...loading, Google: true });
    
    try {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.prompt();
      } else {
        // Fallback for demo or if Google script failed to load
        setTimeout(() => {
          handleSocialLoginSuccess('Google', { credential: 'mock_credential' });
        }, 1000);
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
      setLoading({ ...loading, Google: false });
    }
  };

  // Initiate Facebook login
  const handleFacebookLogin = () => {
    setLoading({ ...loading, Facebook: true });
    
    try {
      if (window.FB) {
        window.FB.login((response) => {
          if (response.authResponse) {
            handleFacebookResponse(response.authResponse);
          } else {
            console.log('Facebook login cancelled');
            setLoading({ ...loading, Facebook: false });
          }
        }, { scope: 'email,public_profile' });
      } else {
        // Fallback for demo or if Facebook script failed to load
        setTimeout(() => {
          handleSocialLoginSuccess('Facebook', { accessToken: 'mock_token' });
        }, 1000);
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      alert('Facebook login failed. Please try again.');
      setLoading({ ...loading, Facebook: false });
    }
  };

  // Handle other social logins (demo implementation)
  const handleOtherSocialLogin = async (provider) => {
    setLoading({ ...loading, [provider]: true });
    
    try {
      // In a real implementation, this would integrate with OAuth providers
      // For demo purposes, we'll simulate successful social login with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        name: `Demo User (${provider})`,
        email: `demo@${provider.toLowerCase()}.com`,
        company: 'Demo Company',
        provider: provider,
        provider_id: `demo_${Date.now()}`,
        avatar: `https://ui-avatars.io/api/?name=Demo+User&background=f97316&color=fff`
      };
      
      onSocialLogin(mockUser);
    } catch (error) {
      console.error(`${provider} login error:`, error);
      alert(`${provider} login failed. Please try again.`);
    } finally {
      setLoading({ ...loading, [provider]: false });
    }
  };

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
          onClick={handleGoogleLogin}
          disabled={loading.Google}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading.Google ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          Google
        </button>
        
        <button
          type="button"
          onClick={handleFacebookLogin}
          disabled={loading.Facebook}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading.Facebook ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )}
          Facebook
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleOtherSocialLogin('Apple')}
          disabled={loading.Apple}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading.Apple ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/>
            </svg>
          )}
          Apple
        </button>
        
        <button
          type="button"
          onClick={() => handleOtherSocialLogin('Microsoft')}
          disabled={loading.Microsoft}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading.Microsoft ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#F25022" d="M0 0h11.377v11.372H0z"/>
              <path fill="#00A4EF" d="M12.623 0H24v11.372H12.623z"/>
              <path fill="#7FBA00" d="M0 12.628h11.377V24H0z"/>
              <path fill="#FFB900" d="M12.623 12.628H24V24H12.623z"/>
            </svg>
          )}
          Microsoft
        </button>
      </div>
      
      {/* Error handling message */}
      <div id="social-auth-error" className="hidden mt-2 text-sm text-red-600"></div>
      
      {/* Helper text */}
      <p className="text-xs text-center text-gray-500 mt-4">
        By continuing with social login, you agree to our{' '}
        <a href="#" className="text-orange-500 hover:text-orange-600">Terms of Service</a>{' '}
        and{' '}
        <a href="#" className="text-orange-500 hover:text-orange-600">Privacy Policy</a>.
      </p>
    </div>
  );
};

export { SocialAuthButtons };

