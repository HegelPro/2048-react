import './index.css'
import Layout from './Blocks/Layout/Layout'
import Main from './Components/Main/Main'
import Providers from './setup/Providers/Providers'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <Providers>
    <Layout>
      <Main />
    </Layout>
  </Providers>
)

ReactDOM.render(<App />, document.getElementById('root'))
