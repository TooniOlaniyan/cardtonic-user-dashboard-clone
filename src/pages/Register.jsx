import React, { useState } from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'
import {BsArrowRightShort} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Register() {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    userName:'',
    number:'',
    password:'',
    confirmPassword:''
  })
  const {name , email , userName , number , password , confirmPassword} = formData

  const handleChange = (e) => {
    setFormData((prevstate) =>({
      ...prevstate,
      [e.target.id]: e.target.value

    }))

  }

  const handleSubmit = (e) => {
    e.prevetDefault()

  }
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
            <form onSubmit={handleSubmit}>
              <div className='formInputs'>
                <input onChange={handleChange} value={name} id='name' type='text' placeholder="What's your Full Name?" />
              </div>
              <div className='formInputs'>
                <input onChange={handleChange} value={email} id='email' type='email' placeholder='Drop your Email' />
              </div>
              <div className='formInputs'>
                <input onChange={handleChange} value={userName} id='userName' type='text' placeholder='Create Username' />
              </div>
              <div className='formInputs'>
                <input onChange={handleChange} value={number} id='number' type='text' placeholder='Phone Number' />
              </div>
              <div className='formInputs'>
                <input onChange={handleChange} value={password} id='password' type='password' placeholder='Create a Password' />
              </div>
              <div className='formInputs'>
                <input onChange={handleChange} value={confirmPassword} id='confirmPassword' type='password' placeholder='Pls Confirm Password' />
              </div>
              <div className='submit'>
                <button>
                  Create Account <BsArrowRightShort className='icon' />
                </button>

                <p>
                  Got an account?{' '}
                  <Link to='/sign-in' style={{textDecoration: 'none'}}>
                    <span>Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </MainContent>
    </div>
  )
}

const MainContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;



  .middleContent {
    padding: 1rem 5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: flex-start;
    width: 100vw;
   
   
    .text {
      width: fit-content;
      
      
      
      p {
        font-size: 55px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
      }
      .nothing {
        font-size: 20px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const Form = styled.div`
  display: flex;
  width: 45rem;
  background-color: white;
  border-radius: 2rem;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 4rem;

    .formInputs {
      width: 100%;

      input {
        border: 1px solid ${({ theme }) => theme.colors.lightblue};
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        padding: 1.3rem 2rem;
        font-size: 18px;
        width: 100%;
        &:focus {
          outline: none;
          background-color: transparent;
        }
        &::placeholder {
          color: ${({ theme }) => theme.colors.inputColor};
        }
      }
    }
    .submit {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      button {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        border-radius: 1.3rem;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.lightblue1};
        background-color: ${({ theme }) => theme.colors.black};
        cursor: pointer;
        .icon {
          font-size: 30px;
        }
      }
      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.textcolor};
      }
      span {
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightblue1};
      }
    }
  }
`

export default Register