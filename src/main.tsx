import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './frontend/styles/index.css'


import {ChakraProvider} from '@chakra-ui/react'
import HeadProvider from './backend/providers/headProvider'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HeadProvider>
        <App />
      </HeadProvider>
    </ChakraProvider>
  </React.StrictMode>
)
