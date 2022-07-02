import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route
            path="/orders/new"
            element={<NewOrderPage user={user} setUser={setUser} />}
          />
          <Route path="/orders" element={<OrderHistoryPage />} />
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
      ) : (
        // <AuthPage setUser={setUser} />
        <HomePage />
      )}
    </main>
  );
}
