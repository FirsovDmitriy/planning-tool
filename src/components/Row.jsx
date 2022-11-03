import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Row = ({ children, ...props }) => {
  return (
    <StyledRow { ...props }> { children } </StyledRow>
  )
}

export default Row
