'use client'

export default function HomePage() {
  // Get the base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/DNS_Solutions_by_stc' : '';
  
  // Client-side redirect using meta refresh and JavaScript
  return (
    <html>
      <head>
        <title>DNS Solutions by STC</title>
        <meta httpEquiv="refresh" content={`0; url=${basePath}/knowledge-base`} />
        <script dangerouslySetInnerHTML={{
          __html: `window.location.href = '${basePath}/knowledge-base'`
        }} />
      </head>
      <body>
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
            <a href={`${basePath}/knowledge-base`} style={{ color: '#0066cc' }}>
              Click here if you are not redirected automatically
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
