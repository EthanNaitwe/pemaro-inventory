// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import AuthProvider from './config/interceptors/AuthProvider.jsx'
import { setupAxiosInterceptors } from './config/interceptors/axiosInterceptor.js'
import { store } from './config/store/index.js'
import './index.css'

setupAxiosInterceptors(store);

document.title = import.meta.env.VITE_APP_SITE_TITLE || 'Atom PoS';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
)
