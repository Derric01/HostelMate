'use client';

import { useState } from 'react';

export default function RequestButton({ userId, status = 'none', size = 'sm' }) {
  const [requestStatus, setRequestStatus] = useState(status);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRequestStatus('sent');
      setIsLoading(false);
    }, 1000);
  };

  const handleAccept = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRequestStatus('accepted');
      setIsLoading(false);
    }, 1000);
  };

  const handleDecline = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRequestStatus('none');
      setIsLoading(false);
    }, 1000);
  };
  if (isLoading) {
    return (
      <button className={`btn btn-${size}`}>
        <span className="loading loading-spinner loading-xs"></span>
        Loading
      </button>
    );
  }

  switch (requestStatus) {
    case 'none':
      return (
        <button 
          className={`btn btn-primary btn-${size}`} 
          onClick={handleRequest}
        >
          Send Request
        </button>
      );
    case 'sent':
      return (
        <button className={`btn btn-disabled btn-${size}`}>
          Request Sent
        </button>
      );
    case 'received':
      return (
        <div className="flex gap-1">
          <button 
            className={`btn btn-success btn-${size}`} 
            onClick={handleAccept}
          >
            Accept
          </button>
          <button 
            className={`btn btn-error btn-${size}`} 
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      );
    case 'accepted':
      return (
        <button className={`btn btn-success btn-${size}`}>
          Matched
        </button>
      );
    default:
      return null;
  }
}
