import React from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'
import {BsArrowRightShort} from 'react-icons/bs'

function Register() {
  return (
    <div>
      <RegisterNav />
      <MainContent>
        <div className='middleContent'>
          <div className='text'>
            <p>Relax and Trade</p>
            <p>Nothing has to be stressful</p>
          </div>
          <Form>
            <form>
              <div className='formInputs'>
                <input type='text' placeholder="What's your Full Name?" />
              </div>
              <div className='formInputs'>
                <input type='email' placeholder='Drop your Email' />
              </div>
              <div className='formInputs'>
                <input type='text' placeholder='Create Username' />
              </div>
              <div className='formInputs'>
                <input type='number' placeholder='Phone Number' />
              </div>
              <div className='formInputs'>
                <input type='password' placeholder='Create a Password' />
              </div>
              <div className='formInputs'>
                <input type='password' placeholder='Pls Confirm Password' />
              </div>
              <div>
                <button>
                  Create Account <BsArrowRightShort />{' '}
                </button>

                <p>
                  Got an account <span>Sign In</span>{' '}
                </p>
              </div>
            </form>
          </Form>
        </div>
        <div>
          <p>Nees Help? Contact Us</p>
        </div>
      </MainContent>
    </div>
  )
}

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.middleContent{
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
  
`
const Form = styled.div`
  
`

export default Register