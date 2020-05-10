import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './Components/Layout'
import Providers from './setup/Providers'
import Main from './Components/Main'

const App = () => (
  <Providers>
    <Layout>
      <Main />
    </Layout>
  </Providers>
)

ReactDOM.render(<App />, document.getElementById('root'))
