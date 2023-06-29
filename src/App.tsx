import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import Categories from './categories.json'
import { CategoryGrid } from './components/CategoryGrid'

const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Categories</Breadcrumb.Item>
        </Breadcrumb>
        <CategoryGrid categories={Categories}/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App
