import './App.css';    // mantém seu import de bootstrap aí dentro
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage   from './pages/LoginPage';
import logoSeven from './img/logo-seven.png';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`,
    redirectUri: process.env.REACT_APP_REDIRECT_URI,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);



function App() {
  return (
    <div className="min-vh-100">
      {/* Header */}
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
      <header className="text-center py-4">
          <Link to="/" className="text-decoration-none text-dark">
          <img
            src={logoSeven}
            alt="Seven Pounds Logo"
            className="d-block mx-auto mb-3"
            style={{ maxWidth: '300px' }}
          />
          </Link>
      </header>

        {/* Conteúdo principal que ocupa o espaço disponível */}
        <main className="container">
            <Routes>
              <Route path="/"        element={<LandingPage />} />
              <Route path="/login"   element={<LoginPage />} />
            </Routes>
          
        </main>

      </BrowserRouter>
    </MsalProvider>
    </div>
  );
}

export default App;
