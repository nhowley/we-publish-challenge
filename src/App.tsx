import React from 'react'
import { Layout } from 'antd'
import CategoriesContainer from './components/CategoriesContainer/CategoriesContainer'

const { Header, Footer } = Layout

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="demo-logo" />
      </Header>
      <CategoriesContainer />
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App
