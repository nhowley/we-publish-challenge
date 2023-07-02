import type { FC } from 'react'
import { List } from 'antd'
import { StyledCard, StyledCardContent, StyledCardTitle, StyledContainer } from './CategoryGrid.styled'
import type { Category } from '../../models/category.model'
import { Link } from 'react-router-dom'

interface Props {
  categories: Category[]
}

export const CategoryGrid: FC<Props> = ({ categories }) => {
  return (
    <StyledContainer>
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    }}
    dataSource={categories}
    renderItem={({ name, iconUrl, slug }) => (
      <List.Item>
        <Link to={slug}>
          <StyledCard>
            <StyledCardContent>
              <img alt={name} src={iconUrl} width={50} height={50}/>
              <StyledCardTitle>{name}</StyledCardTitle>
            </StyledCardContent>
          </StyledCard>
        </Link>
      </List.Item>
    )}
  />
  </StyledContainer>
  )
}
