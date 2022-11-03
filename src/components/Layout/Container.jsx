import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`


const Container = ({ children, ...props }) => {
  return <StyledContainer { ...props }> { children } </StyledContainer>
}

export default Container
