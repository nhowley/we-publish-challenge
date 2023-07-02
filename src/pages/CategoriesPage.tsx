import React from 'react'
import { Layout } from 'antd'
import CategoriesContainer from '../components/CategoriesContainer/CategoriesContainer'
import { StyledFooter } from './CategoriesPage.styled'

const { Header } = Layout

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <CategoriesContainer />
      <StyledFooter>Ant Design ©2023 Created by Ant UED</StyledFooter>
    </Layout>
  )
}

export default CategoriesPage
