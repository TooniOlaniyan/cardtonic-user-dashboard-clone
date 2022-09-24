import React , {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { HiOutlineCake } from 'react-icons/hi'
import {BiEnvelope} from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import EditPhone from './EditPhone'

function ProfileModal({setChangeProfile}) {
  const [editPhone, setEditPhoneNumber] = useState(false)
  return (
    <Container>
      <ChangeProfile>
        {editPhone && <EditPhone setEditPhoneNumber={setEditPhoneNumber} />}
        <Button onClick={() => setChangeProfile(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div onClick={() => setEditPhoneNumber(true)} className='changePhone'>
          <div>
            <FaPhoneAlt className='phone' />
            <p>Edit Phone Number</p>
          </div>
          <MdKeyboardArrowRight className='icons' />
        </div>
        <div className='personData'>
          <div>
            <HiOutlineCake className='icon' />
            <p>September 7</p>
          </div>
        </div>
        <div className='personData'>
          <div>
            <BiEnvelope className='icon' />
            <p>toonilaniyan@gmail.com</p>
          </div>
        </div>

        <Save>
          <div className='save'>
            <p>
              Save <FaArrowRight />
            </p>
          </div>
          <p className='profile'>Profile</p>
        </Save>
      </ChangeProfile>
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
const ChangeProfile = styled.div`
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
    height: 70%;
    padding: 13rem 2rem;
  }

  .changePhone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    width: 70%;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    @media screen and (max-width: 640px) {
      width: 100%;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      p {
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 19px;
        font-weight: 700;
      }
      .phone {
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 21px;
      }
    }

    .icons {
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 20px;
      border: 2px solid ${({ theme }) => theme.colors.lightblue1};
      border-radius: 0.5rem;
    }
  }

  .personData {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    width: 70%;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    @media screen and (max-width: 640px) {
      width: 100%;
      padding: 1rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      p {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 17px;
      }
      .icon {
        color: ${({ theme }) => theme.colors.lightgray};
        font-size: 25px;
      }
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

 const Save = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   margin-top: 1rem;
   @media screen and (max-width: 640px) {
     flex-direction: column;
     align-items: flex-start;
     gap: 6rem;
   }
   .profile {
     font-weight: 900;
     font-size: 30px;
     color: ${({ theme }) => theme.colors.textcolor};
     @media screen and (max-width: 640px) {
       align-self: flex-end;
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
       @media screen and (max-width: 640px) {
         gap: 3rem;
       }
     }
   }
 `
export default ProfileModal