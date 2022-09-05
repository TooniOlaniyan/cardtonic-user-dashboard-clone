import React from 'react'
import logo  from '../asset/images/logo.svg'
import {BsArrowLeftShort} from 'react-icons/bs'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function RegisterNav() {
 
  return (
    <Main>
      <div className='Logo'>
        <img className='image' src={logo} alt='' />
      </div>
      <Link to='/' style={{textDecoration:'none'}}>
        <BackButton >
          <BsArrowLeftShort className='icon' />
        </BackButton>
      </Link>
    </Main>
  )
}

const Main = styled.div`
  max-height: 1rem;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  gap: 60rem;
  align-items: center;
  padding: 6rem 0;
  z-index: 3;
  background-color: #f9f9f9;
  margin-bottom: 3rem;
  @media screen and (max-width: 640px) {
    gap: 8rem;
  }
  .Logo {
    .image {
      width: 12rem;
      @media screen and (max-width: 640px) {
        width: 10rem;
      }
    }
  }
`

const BackButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.2px solid ${({ theme }) => theme.colors.textcolor};
  border-radius: 1.2rem;
  @media screen and (max-width:640px){
    width: 3.5rem;
    height: 3.5rem;

    
  }
  cursor: pointer;
  .icon {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.textcolor};

  }
`

export default RegisterNav