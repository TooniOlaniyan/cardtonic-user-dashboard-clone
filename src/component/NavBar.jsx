import React, { useState } from 'react'
import styled from 'styled-components'
import logOut from '../asset/images/logOut.svg'
import notification from '../asset/images/notification.svg'
import {useNavigate, UseNavigate} from 'react-router-dom'
 
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
          Good Afternoon, <span>The_ot</span>{' '}
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
          <div>
            <p>Are you sure you want to log out?</p>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
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
    align-items: center;
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