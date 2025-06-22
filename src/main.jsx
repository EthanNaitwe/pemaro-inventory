// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { findAppDomain, findPrimaryColor } from './config/helpers/configHelpers.js'
import AuthProvider from './config/interceptors/AuthProvider.jsx'
import { setupAxiosInterceptors } from './config/interceptors/axiosInterceptor.js'
import { store } from './config/store/index.js'
import './index.css'

setupAxiosInterceptors(store);
const root = document.documentElement;
const appName = import.meta.env.VITE_APP_NAME;

document.title = findAppDomain(appName);
root.style.setProperty('--primary-color', findPrimaryColor(appName));

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '/vaalz-logo-small.png';
document.head.appendChild(favicon);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
)
