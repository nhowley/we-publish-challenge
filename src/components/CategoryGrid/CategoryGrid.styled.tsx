import { Typography, Card } from 'antd'
import styled from 'styled-components'

export const StyledContainer = styled.div`
    margin-top: 20px;
`

export const StyledCard = styled(Card)`
    &:hover{
      cursor: pointer;
      box-shadow: 0 0 11px rgba(33,33,33,.2);
    }
`
export const StyledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const StyledCardTitle = styled(Typography)`
    margin-top: 10px;
    font-weight: bold;
`
