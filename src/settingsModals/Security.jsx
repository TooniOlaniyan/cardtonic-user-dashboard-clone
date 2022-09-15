import React from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'
import ChangePassword from './ChangePassword'
import ChangePin from './ChangePin'
import ResetPin from './ResetPin'

function Security({setSecurity}) {
  const [changePassword , setChangePassword] = useState(false)
  const [changePin , setChangePin] = useState(false)
  const [resetPin , setResetPin] = useState(false)
  return (
    <Container>
      <ChangeSecurity>
        {changePassword && <ChangePassword setChangePassword={setChangePassword}/>}
        {changePin && <ChangePin setChangePin={setChangePin}/>}
        {resetPin && <ResetPin setResetPin={setResetPin}/>}
        <Button onClick={() => setSecurity(false)}>
          <GrFormClose />
        </Button>
        <div onClick={() => setChangePassword(true)} className='settingOptions'>
          <p>Change Password</p>
          <MdKeyboardArrowRight className='icons' />
        </div>
        <div onClick={() => setChangePin(true)} className='settingOptions'>
          <p>Change Pin</p>
          <MdKeyboardArrowRight className='icons' />
        </div>
        <div onClick={() => setResetPin(true)} className='settingOptions'>
          <p>Reset Pin</p>
          <MdKeyboardArrowRight className='icons' />
        </div>
        <div className='title'>
          <p>Security</p>
        </div>
      </ChangeSecurity>
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

const ChangeSecurity = styled.div`
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
  .settingOptions {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    width: 70%;
    padding: 1.2rem 2rem;
    justify-content: space-between;
    border-radius: 1.4rem;
    cursor: pointer;
    p {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.textcolor};
      font-size: 17px;
    }
    .icons {
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 20px;
      border: 2px solid ${({ theme }) => theme.colors.lightblue1};
      border-radius: 0.5rem;
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
   padding: 0.25rem;
   border-radius: 0.8rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
 `

export default Security