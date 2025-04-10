import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./redux/store"
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)