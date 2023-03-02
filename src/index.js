import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GitHubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Auth0Provider
      domain="dev-rc70znu4blk1ugsw.us.auth0.com"
      clientId="Sy68yVcHKkzSeuHQ8Rot4sHHT9wgMBM6"
      redirectUri={window.location.origin}
    >
      <GitHubProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GitHubProvider>
    </Auth0Provider>
  </>
);

reportWebVitals();
// dev-rc70znu4blk1ugsw.us.auth0.com
// Sy68yVcHKkzSeuHQ8Rot4sHHT9wgMBM6

// {
//   "sub": "github|84182789",
//     "nickname": "AVADH070",
//       "name": "Avadh Sonagara",
//         "picture": "https://avatars.githubusercontent.com/u/84182789?v=4",
//           "updated_at": "2022-12-08T14:13:53.213Z"
// }