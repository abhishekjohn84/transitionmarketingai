import React, { useState, useEffect } from 'react';
import AdminPanel from '../AdminPanel';

const Admin = ({ user, onNavigate }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if the current user has admin privileges
    if (user && user.role === 'admin') {
      setIsAdmin(true);
    } else {
      const adminLoggedIn = localStorage.getItem('adminLoggedIn');
      if (adminLoggedIn === 'true') {
        setIsAdmin(true);
      }
    }
  }, [user]);

  if (!isAdmin && !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            T R A N S I T I O N &nbsp; M A R K E T I N G &nbsp; A I
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Access Denied
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to access the admin panel
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('login')}
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminPanel />
      
      {/* Back to site button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => onNavigate('home')}
          className="bg-white text-orange-600 border border-orange-600 px-4 py-2 rounded-md hover:bg-orange-50 transition-colors shadow-md"
        >
          Back to Site
        </button>
      </div>
    </div>
  );
};

export default Admin;

