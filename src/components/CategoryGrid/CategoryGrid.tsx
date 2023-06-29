import type { FC } from 'react'
import { List } from 'antd'
import { StyledCard, StyledCardContent, StyledCardTitle } from './CategoryGrid.styled'

interface Props {
  categories: any[]
}

export const CategoryGrid: FC<Props> = ({
  categories
}) => {
  return (
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
    renderItem={({ name, iconUrl }) => (
      <List.Item>
        <StyledCard>
          <StyledCardContent>
            <img alt={name} src={iconUrl} width={50} height={50}/>
            <StyledCardTitle>{name}</StyledCardTitle>
          </StyledCardContent>
        </StyledCard>
      </List.Item>
    )}
  />
  )
}
