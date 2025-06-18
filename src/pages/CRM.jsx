import React, { useState, useEffect } from 'react';

const CRM = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('leads');
  const [leads, setLeads] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API Configuration
  const API_BASE = 'https://9yhyi3cqnp36.manus.space/api';

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch leads
        const leadsResponse = await fetch(`${API_BASE}/leads`);
        const leadsData = await leadsResponse.json();
        
        if (leadsData.success) {
          setLeads(leadsData.leads || []);
        } else {
          // For demo, use sample data if API fails
          setLeads([
            { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', company: 'Kumar Real Estate', phone: '+91 98765 43210', status: 'Hot', source: 'Website', created_at: '2025-06-10' },
            { id: 2, name: 'Priya Sharma', email: 'priya@techstartup.com', company: 'TechStartup Solutions', phone: '+91 87654 32109', status: 'Warm', source: 'LinkedIn', created_at: '2025-06-09' },
            { id: 3, name: 'Amit Patel', email: 'amit@retailstore.com', company: 'Patel Retail Chain', phone: '+91 76543 21098', status: 'Cold', source: 'Referral', created_at: '2025-06-08' }
          ]);
        }
        
        // Fetch contacts
        const contactsResponse = await fetch(`${API_BASE}/contacts`);
        const contactsData = await contactsResponse.json();
        
        if (contactsData.success) {
          setContacts(contactsData.contacts || []);
        } else {
          // For demo, use sample data if API fails
          setContacts([
            { id: 1, name: 'Vikram Singh', email: 'vikram@example.com', company: 'Singh Technologies', phone: '+91 98765 12345', position: 'CEO', last_contact: '2025-06-12' },
            { id: 2, name: 'Neha Gupta', email: 'neha@techfirm.com', company: 'TechFirm India', phone: '+91 87654 23456', position: 'Marketing Director', last_contact: '2025-06-11' },
            { id: 3, name: 'Rahul Verma', email: 'rahul@retailgroup.com', company: 'Retail Group', phone: '+91 76543 34567', position: 'Operations Manager', last_contact: '2025-06-10' }
          ]);
        }
        
        // Fetch campaigns
        const campaignsResponse = await fetch(`${API_BASE}/campaigns`);
        const campaignsData = await campaignsResponse.json();
        
        if (campaignsData.success) {
          setCampaigns(campaignsData.campaigns || []);
        } else {
          // For demo, use sample data if API fails
          setCampaigns([
            { id: 1, name: 'Summer Promotion', type: 'Email', status: 'Active', sent: 1250, opened: 875, clicked: 234, start_date: '2025-06-01', end_date: '2025-06-30' },
            { id: 2, name: 'Social Media Campaign', type: 'Social', status: 'Active', sent: 2500, opened: 1800, clicked: 450, start_date: '2025-06-05', end_date: '2025-07-05' },
            { id: 3, name: 'Lead Nurturing Sequence', type: 'Email', status: 'Paused', sent: 800, opened: 520, clicked: 156, start_date: '2025-05-15', end_date: '2025-06-15' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        
        // For demo, use sample data if API fails
        setLeads([
          { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', company: 'Kumar Real Estate', phone: '+91 98765 43210', status: 'Hot', source: 'Website', created_at: '2025-06-10' },
          { id: 2, name: 'Priya Sharma', email: 'priya@techstartup.com', company: 'TechStartup Solutions', phone: '+91 87654 32109', status: 'Warm', source: 'LinkedIn', created_at: '2025-06-09' },
          { id: 3, name: 'Amit Patel', email: 'amit@retailstore.com', company: 'Patel Retail Chain', phone: '+91 76543 21098', status: 'Cold', source: 'Referral', created_at: '2025-06-08' }
        ]);
        
        setContacts([
          { id: 1, name: 'Vikram Singh', email: 'vikram@example.com', company: 'Singh Technologies', phone: '+91 98765 12345', position: 'CEO', last_contact: '2025-06-12' },
          { id: 2, name: 'Neha Gupta', email: 'neha@techfirm.com', company: 'TechFirm India', phone: '+91 87654 23456', position: 'Marketing Director', last_contact: '2025-06-11' },
          { id: 3, name: 'Rahul Verma', email: 'rahul@retailgroup.com', company: 'Retail Group', phone: '+91 76543 34567', position: 'Operations Manager', last_contact: '2025-06-10' }
        ]);
        
        setCampaigns([
          { id: 1, name: 'Summer Promotion', type: 'Email', status: 'Active', sent: 1250, opened: 875, clicked: 234, start_date: '2025-06-01', end_date: '2025-06-30' },
          { id: 2, name: 'Social Media Campaign', type: 'Social', status: 'Active', sent: 2500, opened: 1800, clicked: 450, start_date: '2025-06-05', end_date: '2025-07-05' },
          { id: 3, name: 'Lead Nurturing Sequence', type: 'Email', status: 'Paused', sent: 800, opened: 520, clicked: 156, start_date: '2025-05-15', end_date: '2025-06-15' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchData();
    }
  }, [user]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Warm': return 'bg-yellow-100 text-yellow-800';
      case 'Cold': return 'bg-blue-100 text-blue-800';
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle adding a new lead
  const handleAddLead = () => {
    // In a real implementation, this would open a form modal
    alert('Add Lead functionality would open a form here');
  };

  // Handle adding a new contact
  const handleAddContact = () => {
    // In a real implementation, this would open a form modal
    alert('Add Contact functionality would open a form here');
  };

  // Handle creating a new campaign
  const handleCreateCampaign = () => {
    // In a real implementation, this would open a form modal
    alert('Create Campaign functionality would open a form here');
  };

  if (!user) {
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
            Please sign in to access the CRM dashboard
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
      {/* CRM Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CRM Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your leads, contacts, and campaigns</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name || 'User'}</span>
              <button 
                onClick={() => onNavigate('home')}
                className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'leads', name: 'Lead Management', icon: '👥' },
              { id: 'contacts', name: 'Contacts', icon: '📇' },
              { id: 'campaigns', name: 'Campaigns', icon: '📧' },
              { id: 'analytics', name: 'Analytics', icon: '📈' }
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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* CRM Content */}
        {!loading && !error && (
          <>
            {/* Leads Tab */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
                  <button 
                    onClick={handleAddLead}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
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
                              <div className="text-sm text-gray-500">{lead.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.company}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.source}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.created_at}</td>
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

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Contacts</h2>
                  <button 
                    onClick={handleAddContact}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add New Contact
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contacts.map((contact) => (
                        <tr key={contact.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{contact.email}</div>
                            <div className="text-sm text-gray-500">{contact.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.company}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.last_contact}</td>
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

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Marketing Campaigns</h2>
                  <button 
                    onClick={handleCreateCampaign}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
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
                          <p className="text-sm text-gray-500">
                            {campaign.start_date} to {campaign.end_date}
                          </p>
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
                      <div className="mt-4 flex justify-end space-x-2">
                        <button className="text-orange-600 hover:text-orange-900 text-sm font-medium">Edit</button>
                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View Report</button>
                        {campaign.status === 'Active' ? (
                          <button className="text-red-600 hover:text-red-900 text-sm font-medium">Pause</button>
                        ) : (
                          <button className="text-green-600 hover:text-green-900 text-sm font-medium">Activate</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange-500">{leads.length}</p>
                      <p className="text-gray-600">Total Leads</p>
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
                  
                  <div className="mt-8">
                    <h4 className="text-md font-semibold text-gray-900 mb-4">Lead Sources</h4>
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
                        <div className="bg-green-500 h-full" style={{ width: '30%' }}></div>
                        <div className="bg-orange-500 h-full" style={{ width: '15%' }}></div>
                        <div className="bg-purple-500 h-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span>Website (45%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>Social Media (30%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                        <span>Referrals (15%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span>Other (10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CRM;

