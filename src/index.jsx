import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context';
import { Error, Single } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/single' element={<Single />}/>
      <Route path='*' element={<Error />}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

