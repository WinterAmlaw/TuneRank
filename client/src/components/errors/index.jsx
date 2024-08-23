import React from 'react'

const ErrorFallback = () => {
  return (
    <div>
      <h1>There has been an Error</h1>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh Page
      </button>
    </div>

  )
}

export default ErrorFallback