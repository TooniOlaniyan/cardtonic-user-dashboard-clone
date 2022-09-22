import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Suggestion({setSuggestion}) {
  return (
    <Container>
      <SendSuggestion>
        <Button onClick={() => setSuggestion(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='dropNote'>
          <p>Drop a note to tell us how we can make your experience better.</p>
        </div>
        <div className='comments'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='2'
            placeholder='Your thoughts go here...'
          ></textarea>
        </div>
        <div className='save'>
          <p>
            Send <FaArrowRight />
          </p>
        </div>
        <div className='title'>
          <p>Suggestion Box</p>
        </div>
      </SendSuggestion>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const SendSuggestion = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    width: 56%;
    height: 58%;
    border-radius: 1.6rem;
    padding: 13rem 4rem;
    gap: 2rem;
    position: relative;
    margin-top: -1rem;
    @media screen and (max-width: 640px) {
      width: 95%;
      height: 75%;
      padding: 13rem 1rem;
    }
    .dropNote {
      font-weight: 900;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.darkblue};
    }
    .comments {
      width: 100%;
      textarea {
        width: 80%;
        border: 1px solid ${({ theme }) => theme.colors.lightblue};
        border-radius: 1.2rem;
        padding: 1rem 0.5rem 0rem 1rem;
        display: flex;
        align-items: center;
        resize: none;
        font-size: 16px;
        font-family: 'Lato', sans-serif;
        background-color: transparent;
        @media screen and (max-width: 640px) {
          width: 100%;
        }
        color: ${({ theme }) => theme.colors.textcolor};
        ::-webkit-input-placeholder {
          color: ${({ theme }) => theme.colors.textcolor};
        }

        &:focus {
          outline: none;
        }
      }
    }
    .save {
      cursor: pointer;
      p {
        background-color: ${({ theme }) => theme.colors.black};
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 1.2rem 3rem;
        border-radius: 1.3rem;
        color: ${({ theme }) => theme.colors.lightblue1};
      }
    }
    .title {
      width: 100%;
      p {
        text-align: right;
        font-weight: 900;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.textcolor};
      }
    }
  `
   const Button = styled.div`
     position: absolute;
     top: 1.4rem;
     right: 2rem;
     border: 3px solid ${({ theme }) => theme.colors.textcolor};
     padding: 0.4rem;
     border-radius: 0.8rem;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     .icon {
       color: ${({ theme }) => theme.colors.button};
       font-size: 15px;
     }
   `

export default Suggestion