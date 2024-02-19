import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css';
import Summary from './Components/Summary.jsx';
import Form from './Components/Form.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/internship" element={<App />} />
        <Route path="/internship/summary/:name" element={<Summary />} />
        <Route path="/internship/form/:name" element={<Form />} />

      </Routes>
    </Router>
  </React.StrictMode>,
)
