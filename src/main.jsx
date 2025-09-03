// Import React library for building the UI
import React from 'react'
// Import ReactDOM for rendering the app to the DOM
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import global CSS styles
import './index.css'

// Create the root element and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the app in StrictMode for development warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
