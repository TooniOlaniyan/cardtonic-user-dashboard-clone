import React , {useState} from 'react'
import styled from 'styled-components'
import RegisterNav from '../component/RegisterNav'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

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
  return (
    <div>
      <RegisterNav />
      <MainContent>
        <div className='middleContent'>
          <div className='text'>
            <p>Hop Right Back In.</p>
            <p className='nothing'>Sign into continue</p>
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
                placeholder='Create a Password'
              />
            </div>
            <div className='submit'>
              <button>
                Get me in <BsArrowRightShort className='icon' />
              </button>

              <p>
                Got an account?{' '}
                <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                  <span>Sign In</span>
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </MainContent>
    </div>
  )
}


export default SignIn