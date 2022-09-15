import React from 'react'
import styled from 'styled-components'
import { BsArrowLeftCircle } from 'react-icons/bs'

function ChangePassword({setChangePassword}) {
  return (
    <Container>
      <PasswordChange>
        <Button onClick={() => setChangePassword(false)}>
          <BsArrowLeftCircle />
        </Button>
      </PasswordChange>
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
const PasswordChange = styled.div`
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
`
 const Button = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.8rem;
   padding: 0.25rem;
   color: ${({ theme }) => theme.colors.textcolor};
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   font-size: 30px;
 `
export default ChangePassword