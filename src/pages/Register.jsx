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
              <div className='submit'>
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

  .middleContent {
    padding: 1rem 5rem;
    overflow: hidden;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .text {
      flex: 3;
      p {
        font-size: 60px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
      }
      .nothing {
        font-size: 25px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const Form = styled.div`
  display: flex;
  flex: 5;
  background-color: white;
  border-radius: 2rem;
 
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .formInputs {
      input {
        border: 1px solid ${({ theme }) => theme.colors.lightblue};
        border-radius: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        font-size: 18px;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: ${({ theme }) => theme.colors.inputColor};
        }
      }
    }
    .submit{
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
  }
`

export default Register