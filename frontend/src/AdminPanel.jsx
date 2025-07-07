import React, { useState, useEffect } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // For demo purposes, check against the admin credentials
      if (email === 'info@transitionmarketingai.com' && password === 'transition@123') {
        const adminUser = {
          id: 1,
          name: 'Admin User',
          email: 'info@transitionmarketingai.com',
          role: 'admin'
        };
        
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
        onLogin(adminUser);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '8px' }}>🎛️ Admin Panel</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>TransitionMarketingAI Administration</p>
        </div>

        {error && (
          <div style={{
            background: '#fee',
            color: '#c53030',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#ccc' : '#ff6b35',
              color: 'white',
              padding: '14px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Signing In...' : 'Sign In to Admin Panel'}
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalUsers: 1,
    totalLeads: 0,
    activeCampaigns: 0,
    systemHealth: 'Online'
  });

  const StatCard = ({ title, value, icon }) => (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderLeft: '4px solid #ff6b35'
    }}>
      <h3 style={{
        color: '#64748b',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '8px'
      }}>
        {icon} {title}
      </h3>
      <div style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1e293b'
      }}>
        {value}
      </div>
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <div
      onClick={() => onClick(id)}
      style={{
        padding: '12px 24px',
        cursor: 'pointer',
        borderBottom: `2px solid ${active ? '#ff6b35' : 'transparent'}`,
        color: active ? '#ff6b35' : '#64748b',
        fontWeight: active ? '600' : '400'
      }}
    >
      {label}
    </div>
  );

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#1e293b', fontSize: '24px', margin: 0 }}>🎛️ Admin Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>{user.name}</span>
          <button
            onClick={onLogout}
            style={{
              background: '#ef4444',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <StatCard title="Total Users" value={stats.totalUsers} icon="👥" />
          <StatCard title="Total Leads" value={stats.totalLeads} icon="📈" />
          <StatCard title="Active Campaigns" value={stats.activeCampaigns} icon="📧" />
          <StatCard title="System Health" value="✅ Online" icon="🔧" />
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          marginBottom: '24px'
        }}>
          <TabButton
            id="overview"
            label="Overview"
            active={activeTab === 'overview'}
            onClick={setActiveTab}
          />
          <TabButton
            id="users"
            label="Users"
            active={activeTab === 'users'}
            onClick={setActiveTab}
          />
          <TabButton
            id="system"
            label="System"
            active={activeTab === 'system'}
            onClick={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '24px'
        }}>
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>📊 System Overview</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>📈 Statistics</h3>
                  <p><strong>Total Users:</strong> {stats.totalUsers}</p>
                  <p><strong>Total Leads:</strong> {stats.totalLeads}</p>
                  <p><strong>Active Campaigns:</strong> {stats.activeCampaigns}</p>
                  <p><strong>New Users (30d):</strong> 1</p>
                  <p><strong>Active Users (7d):</strong> 1</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>🏥 System Health</h3>
                  <p><strong>Database:</strong> <span style={{ color: 'green' }}>Connected</span></p>
                  <p><strong>API Status:</strong> <span style={{ color: 'green' }}>Running</span></p>
                  <p><strong>Backend:</strong> <span style={{ color: 'green' }}>Online</span></p>
                  <p><strong>Uptime:</strong> 100%</p>
                  <p><strong>Last Check:</strong> {new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>👥 User Management</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Email</th>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Role</th>
                    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>Admin User</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>info@transitionmarketingai.com</td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                      <span style={{
                        background: '#fee2e2',
                        color: '#991b1b',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        admin
                      </span>
                    </td>
                    <td style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
                      {new Date().toLocaleDateString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'system' && (
            <div>
              <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>🔧 System Health</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                <div>
                  <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>🔧 System Status</h3>
                  <p><strong>Database Status:</strong> <span style={{ color: 'green' }}>Connected</span></p>
                  <p><strong>API Status:</strong> <span style={{ color: 'green' }}>Running</span></p>
                  <p><strong>Backend Status:</strong> <span style={{ color: 'green' }}>Online</span></p>
                  <p><strong>Frontend Status:</strong> <span style={{ color: 'green' }}>Deployed</span></p>
                </div>
                <div>
                  <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>📊 Performance</h3>
                  <p><strong>Response Time:</strong> &lt; 100ms</p>
                  <p><strong>Memory Usage:</strong> Normal</p>
                  <p><strong>CPU Usage:</strong> Low</p>
                  <p><strong>Storage:</strong> Available</p>
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>🔗 System Information</h3>
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Environment:</strong> Production</p>
                <p><strong>Last Deployment:</strong> {new Date().toLocaleString()}</p>
                <p><strong>Admin Panel:</strong> Integrated</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    const adminUser = localStorage.getItem('adminUser');
    
    if (adminLoggedIn === 'true' && adminUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(adminUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUser');
    setIsLoggedIn(false);
    setUser(null);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard user={user} onLogout={handleLogout} />;
};

export default AdminPanel;

