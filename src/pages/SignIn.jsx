import React from 'react'
import styled from 'styled-components'

function SignIn() {
  return (
    <div>
      <Test>
        <h1>Welcome</h1>
      </Test>
    </div>
  )
}

const Test = styled.div`
  h1{
    color: ${props => props.theme.colors.gray};
  }
  
`
export default SignIn