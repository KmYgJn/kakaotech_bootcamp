import './App.css';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import {React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
      <Router>
          <AppContent />
      </Router>
  );
}

function AppContent() {
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
      const params = new URLSearchParams(location.search);
      if (params.get('signupSuccess')) {
          setShowAlert(true);
          setTimeout(() => {
              setShowAlert(false);
          }, 1000); // 1초 후에 알림창 사라짐
      }
  }, [location]);

  return (
      <section className="App">
          {showAlert && (
              <section className="alert-container">
                  <section className="alert alert-success" role="alert">
                      회원가입을 축하합니다!
                  </section>
              </section>
          )}
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </section>
  );
}

export default App;