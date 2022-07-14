import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './frontend/styles/index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ChakraProvider} from '@chakra-ui/react'
import HeadProvider from './backend/providers/headProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HeadProvider>
        <App />
        <ToastContainer position="bottom-left" />
      </HeadProvider>
    </ChakraProvider>
  </React.StrictMode>
)
