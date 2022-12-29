import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@fontsource/roboto";

import {
  RecoilRoot,
  atom,
} from 'recoil';

const admin = atom(
  {
    key: 'admin',
    default: false
  },
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App admin={admin} />
    </RecoilRoot>
  </React.StrictMode>,
)
