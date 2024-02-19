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
        <Route path="/movie" element={<App />} />
        <Route path="/movie/summary/:name" element={<Summary />} />
        <Route path="/movie/form/:name" element={<Form />} />

      </Routes>
    </Router>
  </React.StrictMode>,
)
