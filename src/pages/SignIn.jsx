import React , {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RegisterNav from '../component/RegisterNav'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import appstore from '../asset/images/appstore.svg'
import googleplay from '../asset/images/googleplay.svg'

function SignIn() {
  const [isRevealed, setIsRevealed] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
    const {  email, password, } =formData
    const handleChange = (e) => {
        setFormData((prevstate) => ({
          ...prevstate,
          [e.target.id]: e.target.value,
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
            <p>Hop Right Back In.</p>
            <p className='nothing'>Sign into continue</p>
            <div className='socials'>
              <img src={googleplay} alt='' />
              <img src={appstore} alt='' />
            </div>
          </div>

          <Form>
            <form onSubmit={handleSubmit}>
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
                  placeholder='Password'
                />
              </div>
              <div className='submit'>
                <button>
                  Get me in <BsArrowRightShort className='icon' />
                </button>

                <p>Forgot your password?</p>
              </div>
            </form>
          </Form>
        </div>
      </MainContent>
      <Redirect>
        <p>
          New User? 
          &nbsp;
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span>Register</span>
          </Link>
        </p>
      </Redirect>
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
      .socials{
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
      }

      p {
        font-size: 55px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
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
        font-size: 16px;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`

const Redirect = styled.div`
  margin-top: 1.5rem;
  margin-left: 70rem;
  p {
    color: ${({ theme }) => theme.colors.darkblue};
    font-size: 18px;
    font-weight: 700;
  }
  span {
    color: ${({ theme }) => theme.colors.lightblue1};
  }
`


export default SignIn