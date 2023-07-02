import React from 'react'
import { Layout } from 'antd'
import CategoriesContainer from '../components/CategoriesContainer/CategoriesContainer'

const { Header, Footer } = Layout

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <CategoriesContainer />
      <Footer style={{ textAlign: 'center', marginTop: 'auto' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default CategoriesPage
