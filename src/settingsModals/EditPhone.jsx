import React from 'react'
import styled from 'styled-components'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'

function EditPhone({setEditPhoneNumber}) {
  return (
    <Container>
      <PhoneEdit>
        <Button onClick={() => setEditPhoneNumber(false)}>
          <BsArrowLeftCircle />
        </Button>
        <div className='personData'>
          <div>
            <p>2348113037120</p>
          </div>
        </div>
        <div className='newNumber'>
         <input type="text" placeholder='New Phone Number' id='newNumber' />
        </div>
        <Save>
          <div className='save'>
            <p>
              Save <FaArrowRight />
            </p>
          </div>
          <p className='profile'>Edit Phone</p>
        </Save>
      </PhoneEdit>
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

const PhoneEdit = styled.div`
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
  .personData {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    width: 80%;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      p {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 17px;
      }
    }
  }
  .newNumber {
    width: 100%;
    input {
      width: 80%;
      padding: 1.1rem;
      border-radius: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textcolor};
      font-size: 17px;
      font-family: 'Lato', sans-serif;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      background-color: transparent;
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      ::-moz-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      &:focus {
        outline: none;
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
   fill: #fff;
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
    margin-top: 1rem;
    .profile {
      font-weight: 900;
      font-size: 30px;
      color: ${({ theme }) => theme.colors.textcolor};
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
  `
export default EditPhone