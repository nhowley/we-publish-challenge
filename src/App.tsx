import { Button, ConfigProvider } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#CF2D3F'
      }
    }}
  >
    <Button type='primary'>Click me</Button>
  </ConfigProvider>
)

export default App
