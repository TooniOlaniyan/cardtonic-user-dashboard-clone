import React from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'

function Register() {
  return (
    <div>
      <RegisterNav/>
      <MainContent>
        <div>
          <p>Relax and Trade</p>
          <p>Nothing has to be stressful</p>
        </div>
        <Form>
          <form>
            <div className="formInputs">
              <input type="text" placeholder= "What's your Full Name?" />
            </div>
            <div className="formInputs">
              <input type="email" placeholder= "Drop your Email" />
            </div>
            <div className="formInputs">
              <input type="text" placeholder= "Create Username" />
            </div>
            <div className="formInputs">
              <input type="number" placeholder= "Phone Number" />
            </div>
            <div className="formInputs">
              <input type="password" placeholder= "Create a Password" />
            </div>
            <div className="formInputs">
              <input type="password" placeholder= "Pls Confirm Password" />
            </div>
          </form>

        </Form>

      </MainContent>
    </div>
  )
}

const MainContent = styled.div`
  
`
const Form = styled.div`
  
`

export default Register