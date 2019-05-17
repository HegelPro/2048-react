import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './Components/Layout'
import Providers from './setup/Providers'
import * as ServiceWorker from './serviceWorker'

const App = () => (
  <Providers>
    <Layout />
  </Providers>
)

ReactDOM.render(<App />, document.getElementById('root'))

ServiceWorker.unregister()
