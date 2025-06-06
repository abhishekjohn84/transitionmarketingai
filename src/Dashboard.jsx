import React, { useState } from 'react'

// Dashboard Component with CRM Integration
const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview')
  
  // Sample CRM data - in real implementation, this would come from your backend
  const [leads, setLeads] = useState([
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', company: 'Kumar Real Estate', status: 'Hot', score: 85, lastContact: '2025-06-05' },
    { id: 2, name: 'Priya Sharma', email: 'priya@techstartup.com', company: 'TechStartup Solutions', status: 'Warm', score: 72, lastContact: '2025-06-04' },
    { id: 3, name: 'Amit Patel', email: 'amit@retailstore.com', company: 'Patel Retail Chain', status: 'Cold', score: 45, lastContact: '2025-06-03' }
  ])

  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Welcome Email Series', type: 'Email', status: 'Active', sent: 1250, opened: 875, clicked: 234 },
    { id: 2, name: 'Social Media Campaign', type: 'Social', status: 'Active', sent: 2500, opened: 1800, clicked: 450 },
    { id: 3, name: 'Lead Nurturing Sequence', type: 'Email', status: 'Paused', sent: 800, opened: 520, clicked: 156 }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'Hot': return 'bg-red-100 text-red-800'
      case 'Warm': return 'bg-yellow-100 text-yellow-800'
      case 'Cold': return 'bg-blue-100 text-blue-800'
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Paused': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || 'User'}!</h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your marketing automation</p>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'leads', name: 'Lead Management', icon: '👥' },
              { id: 'campaigns', name: 'Campaigns', icon: '📧' },
              { id: 'analytics', name: 'Analytics', icon: '📈' },
              { id: 'settings', name: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Leads</p>
                    <p className="text-3xl font-bold text-gray-900">{leads.length}</p>
                  </div>
                  <div className="text-2xl">👥</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Campaigns</p>
                    <p className="text-3xl font-bold text-gray-900">{campaigns.filter(c => c.status === 'Active').length}</p>
                  </div>
                  <div className="text-2xl">📧</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Email Open Rate</p>
                    <p className="text-3xl font-bold text-gray-900">68%</p>
                  </div>
                  <div className="text-2xl">📈</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">12.5%</p>
                  </div>
                  <div className="text-2xl">🎯</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">New lead: Rajesh Kumar from Kumar Real Estate</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Email campaign "Welcome Series" sent to 250 contacts</span>
                  <span className="text-sm text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Social media post scheduled for tomorrow</span>
                  <span className="text-sm text-gray-500">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Add New Lead
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.score}/100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.lastContact}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-orange-600 hover:text-orange-900 mr-3">Edit</button>
                        <button className="text-blue-600 hover:text-blue-900">Contact</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Marketing Campaigns</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Create Campaign
              </button>
            </div>
            
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                      <p className="text-gray-600">{campaign.type} Campaign</p>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{campaign.sent.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Sent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{campaign.opened.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Opened</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{campaign.clicked.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Clicked</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500">2,450</p>
                  <p className="text-gray-600">Total Contacts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">68%</p>
                  <p className="text-gray-600">Open Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-500">18%</p>
                  <p className="text-gray-600">Click Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-500">12.5%</p>
                  <p className="text-gray-600">Conversion Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" value={user?.name || ''} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" value={user?.email || ''} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input type="text" value={user?.company || ''} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { Dashboard }

