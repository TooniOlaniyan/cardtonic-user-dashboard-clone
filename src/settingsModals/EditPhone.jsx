import React from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'

function EditPhone({setEditPhoneNumber}) {
  return (
    <Container>
      <PhoneEdit>
        <Button onClick={() => setEditPhoneNumber(false)}>
          <GrFormClose />
        </Button>
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
`
 const Button = styled.div`
   position: absolute;
   top: 1.4rem;
   right: 2rem;
   border: 3px solid ${({ theme }) => theme.colors.textcolor};
   padding: 0.25rem;
   border-radius: 0.8rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
 `
export default EditPhone