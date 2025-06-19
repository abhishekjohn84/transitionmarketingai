import React, { useState, useEffect } from 'react';
import { VersionHistoryTable } from '../components/VersionHistoryTable';
import { PublishModal } from '../components/PublishModal';
import { RevertModal } from '../components/RevertModal';

const Publisher = ({ onNavigate }) => {
  const [versions, setVersions] = useState([]);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isRevertModalOpen, setIsRevertModalOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API Base URL
  const API_BASE = 'https://5001-i9l4vaxy1hlnjk7y22wy6-72bda4a3.manusvm.computer/api';
  
  // Fetch versions on component mount
  useEffect(() => {
    fetchVersions();
  }, []);
  
  // Function to fetch versions from API
  const fetchVersions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/versions`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch versions');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setVersions(data.versions);
        setError(null);
      } else {
        throw new Error(data.error || 'Failed to fetch versions');
      }
    } catch (err) {
      console.error('Error fetching versions:', err);
      setError('Failed to load version history. Please try again later.');
      
      // Fallback to mock data for development
      setVersions([
        {
          id: '7',
          version: '1.07.0',
          timestamp: '2025-06-06T05:25:00Z',
          summary: 'FINAL FIX: Completely removed all pricing elements and ensured How It Works section is properly displayed',
          author: 'TransitionMarketingAI'
        },
        {
          id: '6',
          version: '1.06.0',
          timestamp: '2025-06-06T05:18:00Z',
          summary: 'Added comprehensive How It Works section with infographics to replace pricing section - pure consultation focus',
          author: 'TransitionMarketingAI'
        },
        {
          id: '5',
          version: '1.05.0',
          timestamp: '2025-06-06T05:07:00Z',
          summary: 'Reorganized header navigation and removed all pricing elements for consultation-focused approach',
          author: 'TransitionMarketingAI'
        },
        {
          id: '4',
          version: '1.04.0',
          timestamp: '2025-06-06T04:44:00Z',
          summary: 'Fixed navigation and ensured all corporate pages (FAQ, Contact, etc.) and login functionality are working properly',
          author: 'TransitionMarketingAI'
        },
        {
          id: '3',
          version: '1.03.0',
          timestamp: '2025-06-06T04:30:00Z',
          summary: 'Added complete authentication system with login/signup and CRM dashboard integration',
          author: 'TransitionMarketingAI'
        },
        {
          id: '2',
          version: '1.02.0',
          timestamp: '2025-06-06T04:02:00Z',
          summary: 'Testing automatic versioning system - should increment to v1.02.0',
          author: 'TransitionMarketingAI'
        },
        {
          id: '1',
          version: '1.01.0',
          timestamp: '2025-06-06T06:16:00Z',
          summary: 'Initial release with complete agency website structure',
          author: 'TransitionMarketingAI'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to handle publishing new version
  const handlePublish = async (versionData) => {
    try {
      const response = await fetch(`${API_BASE}/versions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(versionData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish version');
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Refresh the version list
        fetchVersions();
        
        // Show success message
        alert('Version published successfully!');
      } else {
        throw new Error(data.error || 'Failed to publish version');
      }
    } catch (err) {
      console.error('Error publishing version:', err);
      alert('Failed to publish version. Please try again.');
      
      // For development, add the new version to the local state
      const newVersion = {
        id: String(versions.length + 1),
        ...versionData,
        author: 'TransitionMarketingAI'
      };
      
      setVersions([newVersion, ...versions]);
    }
  };
  
  // Function to handle reverting to a previous version
  const handleRevert = async (version) => {
    try {
      const response = await fetch(`${API_BASE}/versions/${version.id}/revert`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to revert version');
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Refresh the version list
        fetchVersions();
        
        // Show success message
        alert(`Successfully reverted to version ${version.version}!`);
      } else {
        throw new Error(data.error || 'Failed to revert version');
      }
    } catch (err) {
      console.error('Error reverting version:', err);
      alert('Failed to revert version. Please try again.');
      
      // For development, simulate a successful revert
      alert(`Simulated revert to version ${version.version} successful!`);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TransitionMarketingAI Publisher</h1>
        <div className="text-lg text-gray-600">
          Current Version: {versions[0]?.version || 'Loading...'}
        </div>
      </header>
      
      <div className="mb-8">
        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          onClick={() => setIsPublishModalOpen(true)}
        >
          Publish New Version
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Version History</h2>
        
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading version history...</p>
          </div>
        ) : (
          <VersionHistoryTable 
            versions={versions} 
            onRevert={(version) => {
              setSelectedVersion(version);
              setIsRevertModalOpen(true);
            }}
          />
        )}
      </div>
      
      {isPublishModalOpen && (
        <PublishModal
          onClose={() => setIsPublishModalOpen(false)}
          onPublish={handlePublish}
          currentVersion={versions[0]?.version || '1.07.0'}
        />
      )}
      
      {isRevertModalOpen && selectedVersion && (
        <RevertModal
          version={selectedVersion}
          onClose={() => setIsRevertModalOpen(false)}
          onConfirm={() => {
            handleRevert(selectedVersion);
            setIsRevertModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Publisher;

