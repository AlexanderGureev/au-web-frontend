import React from 'react'
import { Column, Layout } from '@ui/layout'
import Footer from '../../components/desktop/Footer'
import Header from './Header'

const App = ({ children, ...rest }) => (
  <Column fill>
    <Header {...rest} />
    <Layout grow={1}>{children}</Layout>
    <Footer />
  </Column>
)

export default App
