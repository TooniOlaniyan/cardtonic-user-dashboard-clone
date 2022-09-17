import React , {useState} from 'react'
import styled from 'styled-components'
import { Link , useNavigate } from 'react-router-dom'
import RegisterNav from '../component/RegisterNav'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import appstore from '../asset/images/appstore.svg'
import googleplay from '../asset/images/googleplay.svg'

function SignIn() {
  const navigate = useNavigate()
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
         e.preventDefault()
         navigate('/dashboard')
       }
  return (
    <Container>
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
                <button >
                  Get me in <BsArrowRightShort className='icon' />
                </button>

                <p className='forgot'>Forgot your password?</p>
              </div>
            </form>
          </Form>
        </div>
      </MainContent>
      <Redirect>
        <p>
          New User? 
          &nbsp;
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <span>Register</span>
          </Link>
        </p>
      </Redirect>
    </Container>
  )
}
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  height: 100vh;
`
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .middleContent {
    padding: 1rem 5rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: flex-start;
    width: 100vw;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .text {
      width: fit-content;
      .socials {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        cursor: pointer;
        @media screen and (max-width: 640px) {
          display: none;
        }
      }

      p {
        font-size: 55px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
        @media screen and (max-width: 640px) {
          width: max-content;
          font-size: 30px;
        }
      }
      .nothing {
        font-size: 25px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.gray};
        @media screen and (max-width: 640px) {
         font-size: 20px;
        }
      }
    }
  }
`

const Form = styled.div`
  display: flex;
  width: 45rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  @media screen and (max-width: 640px) {
    width: 95vw;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 4rem;
    @media screen and (max-width: 640px) {
      padding: 2rem;
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
          padding: 1.3rem;
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
      .forgot {
        color: ${({ theme }) => theme.colors.button};
      }

      width: 100%;

      @media screen and (max-width: 640px) {
        flex-direction: column-reverse;
        gap: 5rem;
      }
      button {
        display: flex;
        justify-content: center;
        gap: 2rem;
        align-items: center;
        padding: 0.8rem 2rem;
        border-radius: 1.3rem;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.lightblue1};
        background-color: ${({ theme }) => theme.colors.black};
        cursor: pointer;
        @media screen and (max-width: 640px) {
          align-self: flex-start;
          padding: 0.7rem 2rem;
          font-size: 17px;
        }
        .icon {
          font-size: 30px;
        }
      }
      p {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.black};
        @media screen and (max-width: 640px) {
          align-self: flex-end;
        }
      }
    }
  }
`

const Redirect = styled.div`
  margin-top: 1.5rem;
  margin-right: 15rem;
  text-align: right;
  @media screen and (max-width: 640px) {
    text-align: center;
    margin-right: 0;
  }
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