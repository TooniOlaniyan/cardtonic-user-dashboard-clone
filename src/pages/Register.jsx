import React from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'
import {BsArrowRightShort} from 'react-icons/bs'
import { theme } from '../component/styles/theme'

function Register() {
  return (
    <div>
      <RegisterNav />
      <MainContent>
        <div className='middleContent'>
          <div className='text'>
            <p>Relax and Trade.</p>
            <p className='nothing'>Nothing has to be stressful</p>
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
                <input type='text' placeholder='Phone Number' />
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
  max-width: 100vw;
  

  .middleContent {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30rem;
    width: 80%;
    
    
    .text {
      
      
      p {
        font-size: 65px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.midblue};
      }
      .nothing {
        font-size: 25px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const Form = styled.div`
display: flex;
background-color: #fff;
padding: 6rem;
border-radius: 2rem;
form{
  width: 100%;
  
  .formInputs{
    input{
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid ${({theme}) => theme.colors.lightblue};
      margin-bottom: 2rem;
      width: 100%;
      &:focus{
        outline: none;
      }
      &::placeholder{
        color: ${({theme}) => theme.colors.textcolor};
      }
    }

  }
}
  
`

export default Register