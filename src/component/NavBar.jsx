import React, { useState } from 'react'
import styled from 'styled-components'
import logOut from '../asset/images/logOut.svg'
import Yes from '../asset/images/Yes.svg'
import No from '../asset/images/No.svg'
import notification from '../asset/images/notification.svg'
import {useNavigate} from 'react-router-dom'
 
function NavBar() {
  const [isOpen , setIsOpen] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => {
    setIsOpen(true)

  }
  return (
    <Navigation>
      <div className='greetings'>
        <p>
          Good Afternoon, <span>The_ot</span>
        </p>
      </div>
      <div>
        <div className='logOut'>
          <img onClick={handleClick} src={logOut} alt='' />
          <img src={notification} alt='' />
        </div>
      </div>
      {isOpen && (
        <div className='logOutModal'>
          <div className='modalContainer'>
            <div className='question'>
              <p>Are you sure you want to log out?</p>
            </div>
            <div className='logoutOptionContainer'>
              <div onClick={() => navigate('/')} className='yes'>
                <p>Yes</p>
                <img src={Yes} alt='' />
              </div>
              <div onClick={() => setIsOpen(false)} className='no'>
                <p>No</p>
                <img src={No} alt='' />
              </div>
            </div>
          </div>
        </div>
      )}
    </Navigation>
  )
}

const Navigation = styled.div`
  padding: 0.5rem 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logOutModal {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    .modalContainer {
      background-color: ${({ theme }) => theme.colors.white};
      width: 45rem;
      height: 18rem;
      margin-top: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 1.6rem;
      gap: 1.5rem;
      .question {
        p {
          font-size: 21px;
          color: ${({ theme }) => theme.colors.textcolor};
          font-weight: 900;
        }
      }
    }
    .logoutOptionContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      .yes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 0.8rem;
        padding: 0.4rem 0.6rem;
        font-size: 12px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightblue1};
        background-color: ${({ theme }) => theme.colors.black};
      }
      .no {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 0.8rem;
        padding: 0.4rem 0.6rem;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.textcolor};
        background-color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
      }
    }
  }
  .greetings {
    align-self: flex-end;
    p {
      font-weight: 600;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.midblue};
    }
    span {
      font-weight: 600;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.lightblue1};
    }
  }
  .logOut {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
`

export default NavBar