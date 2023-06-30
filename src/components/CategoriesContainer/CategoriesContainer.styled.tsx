import { Breadcrumb } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Typography from 'antd/es/typography/Typography'
import styled from 'styled-components'

export const StyledContent = styled(Content)`
  padding: 0 50px;
`

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`

export const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const StyledFilterLabel = styled(Typography)`
  margin-right: 10px;
`
