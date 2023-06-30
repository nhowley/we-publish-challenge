import { Breadcrumb } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Typography from 'antd/es/typography/Typography'
import styled from 'styled-components'

export const StyledContent = styled(Content)`
  padding: 0 50px;
  min-height: 100vh;
`

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: end;
    flex-direction: row;
    align-items: center;
  }
  
`

export const StyledFilterLabel = styled(Typography)`
  margin-right: 10px;
`
