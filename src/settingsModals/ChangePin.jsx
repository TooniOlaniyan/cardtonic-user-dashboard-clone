import React , {useState}  from 'react'
import styled from 'styled-components'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'

function ChangePin({setChangePin}) {
  const [isRevealed, setIsRevealed] = useState(false)
  return (
    <Container>
      <PinChange>
        <Button onClick={() => setChangePin(false)}>
          <BsArrowLeftCircle />
        </Button>
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
            //   onChange={handleChange}
            //   value={password}
            id='password'
            type={isRevealed ? 'text' : 'password'}
            placeholder='Old Pin'
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
            //   onChange={handleChange}
            //   value={password}
            id='password'
            type={isRevealed ? 'text' : 'password'}
            placeholder='Enter new 4 digit pin'
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
            //   onChange={handleChange}
            //   value={password}
            id='password'
            type={isRevealed ? 'text' : 'password'}
            placeholder='Confirm Pin'
          />
        </div>
        <Save>
          <div className='save'>
            <p>
              Save <FaArrowRight />
            </p>
          </div>
        </Save>
      </PinChange>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`
const PinChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 56%;
  height: 58%;
  border-radius: 1.6rem;
  padding: 13rem 3rem;
  gap: 1rem;
  position: relative;
  margin-top: -1rem;
  @media screen and (max-width: 640px) {
    width: 90%;
    height: 80%;
    padding: 13rem 2rem;
  }
  .formInputs {
    width: 80%;
    position: relative;
    @media screen and (max-width: 640px) {
      width: 100%;
    }

    .passwordEye {
      position: absolute;
      top: 1.1rem;
      right: 1.5rem;
      font-size: 23px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.textcolor};
    }

    input {
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      border-radius: 1.4rem;
      padding: 1.2rem 2rem;
      font-size: 17px;
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
`
 const Button = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.8rem;
   padding: 0.25rem;
   color: ${({ theme }) => theme.colors.textcolor};
   fill: ${({ theme }) => theme.colors.textcolor};
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   font-size: 35px;
 `
   const Save = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 100%;

     .save {
       cursor: pointer;
       p {
         background-color: ${({ theme }) => theme.colors.black};
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 2rem;
         padding: 1.1rem 3rem;
         border-radius: 1.3rem;
         color: ${({ theme }) => theme.colors.lightblue1};
       }
     }
   `

export default ChangePin