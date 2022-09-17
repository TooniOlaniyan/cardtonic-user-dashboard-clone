import React, { useState } from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'
import {BsArrowRightShort} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Register() {
  const [isRevealed , setIsRevealed] = useState(false)
  const [isRevealed1 , setIsRevealed1] = useState(false)
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
    e.preventDefault()

  }
  return (
    <Container>
      <RegisterNav />
      <MainContent>
        <div className='middleContent'>
          <div className='text'>
            <p>Relax and Trade.</p>
            <p className='nothing'>Nothing has to be stressful</p>
          </div>
          <Form>
            <form  onSubmit={handleSubmit}>
              <div className='formInputs'>
                <input
                  onChange={handleChange}
                  value={name}
                  id='name'
                  type='text'
                  placeholder="What's your Full Name?"
                />
              </div>
              <div className='formInputs'>
                <input
                  onChange={handleChange}
                  value={email}
                  id='email'
                  type='email'
                  placeholder='Drop your Email'
                />
              </div>
              <div className='formInputs'>
                <input
                  onChange={handleChange}
                  value={userName}
                  id='userName'
                  type='text'
                  placeholder='Create Username'
                />
              </div>
              <div className='formInputs'>
                <input
                  onChange={handleChange}
                  value={number}
                  id='number'
                  type='text'
                  placeholder='Phone Number'
                />
              </div>
              <div className='formInputs'>
                <div>
                  {!isRevealed ? (
                    <AiOutlineEye
                      onClick={() => setIsRevealed(!isRevealed)}
                      className='passwordEye'
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsRevealed(!isRevealed)}
                      className='passwordEye'
                    />
                  )}
                </div>
                <input
                  onChange={handleChange}
                  value={password}
                  id='password'
                  type={isRevealed ? 'text' : 'password'}
                  placeholder='Create a Password'
                />
              </div>
              <div className='formInputs'>
                <div>
                  {!isRevealed1 ? (
                    <AiOutlineEye
                      onClick={() => setIsRevealed1(!isRevealed1)}
                      className='passwordEye'
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsRevealed1(!isRevealed1)}
                      className='passwordEye'
                    />
                  )}
                </div>
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  id='confirmPassword'
                  type={isRevealed1 ? 'text' : 'password'}
                  placeholder='Pls Confirm Password'
                />
              </div>
              <div className='submit'>
                <button>
                  Create Account <BsArrowRightShort className='icon' />
                </button>

                <p>
                  Got an account?{' '}
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <span>Sign In</span>
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </MainContent>
    </Container>
  )
}
const Container = styled.div`
background-color: ${({ theme }) => theme.colors.body};
`
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
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }

    .text {
      width: fit-content;

      p {
        font-size: 55px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
        @media screen and (max-width: 640px) {
          font-size: 45px;
          width: max-content;
        }
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
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 640px) {
    width: 90vw;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
    @media screen and (max-width: 640px) {
      padding: 1rem;
    }

    .formInputs {
      width: 100%;
      position: relative;
      .passwordEye {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 23px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.textcolor};
      }

      input {
        border: 1px solid ${({ theme }) => theme.colors.lightblue};
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        padding: 1.3rem 2rem;
        font-size: 18px;
        width: 100%;
        background-color: transparent;
        @media screen and (max-width: 640px) {
          padding: 1.2rem;
        }
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
      margin-top: 1rem;
      @media screen and (max-width: 640px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 4rem;
        margin-top: 0.1rem;
      }

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
        @media screen and (max-width: 640px) {
          font-size: 18px;
          padding: 0.9rem 1.3rem;
          border-radius: 1.4rem;
        }
        .icon {
          font-size: 30px;
        }
      }
      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.textcolor};
        @media screen and (max-width: 640px) {
          font-size: 16px;
        }
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