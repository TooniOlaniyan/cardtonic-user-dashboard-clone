import React from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'

function Support({setSupport}) {
  return (
    <Container>
      <SupportLinks>
        <Button onClick={() => setSupport(false)}>
          <GrFormClose />
        </Button>
      </SupportLinks>
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
  z-index: 3;
`
const SupportLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 56%;
  height: 58%;
  border-radius: 1.6rem;
  padding: 13rem 4rem;
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

export default Support