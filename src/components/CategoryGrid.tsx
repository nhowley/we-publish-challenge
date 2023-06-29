import type { FC } from 'react'
import { List, Card, Typography } from 'antd'

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
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img alt={name} src={iconUrl} width={50} height={50}/>
            <Typography style={{ marginTop: '10px', fontWeight: 'bold' }}>{name}</Typography>
          </div>
        </Card>
      </List.Item>
    )}
  />
  )
}
