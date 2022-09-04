import React from 'react'
import logo  from '../asset/images/logo.svg'
import {BsArrowLeftShort} from 'react-icons/bs'
import styled from 'styled-components'

function RegisterNav() {
  return (
    <Main>
        <div className='Logo'>
            <img className='image' src={logo} alt="" />
        </div>
        <BackButton>
            <BsArrowLeftShort className='icon'/>

        </BackButton>

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
  .Logo {
    .image {
      width: 12rem;
    }
  }
`

const BackButton = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.textcolor};
  border-radius: 1.2rem;
  cursor: pointer;
  .icon {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.textcolor};

  }
`

export default RegisterNav