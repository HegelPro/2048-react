import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './Blocks/Layout'
import Providers from './setup/Providers'
import Main from './Components/Main'

import './store/eventHandlers'

const App = () => (
  <Providers>
    <Layout>
      <Main />
    </Layout>
  </Providers>
)

ReactDOM.render(<App />, document.getElementById('root'))
