'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Client-side redirect to knowledge-base
    const basePath = process.env.NODE_ENV === 'production' ? '/DNS_Solutions_by_stc' : '';
    window.location.replace(`${basePath}/knowledge-base`);
  }, []);

  // Fallback content while redirecting
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>DNS Solutions by STC</h1>
        <p>Redirecting to Knowledge Base...</p>
        <noscript>
          <a href="/knowledge-base" style={{ color: '#0066cc' }}>
            Click here to continue to Knowledge Base
          </a>
        </noscript>
      </div>
    </div>
  )
}
