import type { FC } from 'react'
import { theme } from 'antd'

interface Props {
  categories: any[]
}

export const CategoryGrid: FC<Props> = ({
  categories
}) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
      <div className="site-layout-content" style={{ background: colorBgContainer }}>
        {categories.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
  )
}
