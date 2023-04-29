import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

import './styles/elements/base.css'
import './styles/generic/reset.css'
import './styles/settings/colors.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
