import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TestRefrence from './components/TestRefrence.jsx'
import MyRef from './components/MyRef.jsx'
import Test from './components/Test.jsx'
import UsingRef from './components/UsingRef.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <TestRefrence />
  // <MyRef />
  // <Test />
  // <UsingRef />
)
