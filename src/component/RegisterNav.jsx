import React from 'react'
import logo  from '../asset/images/logo.svg'
import {BsArrowLeftShort} from 'react-icons/bs'
import styled from 'styled-components'

function RegisterNav() {
  return (
    <Main>
        <div className='Logo'>
            <img src={logo} alt="" />
        </div>
        <BackButton>
            <BsArrowLeftShort className='icon'/>

        </BackButton>

    </Main>
  )
}

const Main = styled.div`
    width: 100vw;
    max-height: 4rem ;
    display: flex;
    justify-content: center;
    gap: 60rem;
    align-items: center;
    padding: 6rem 0;

`

const BackButton = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.textcolor};
  border-radius: 1.5rem;
  cursor: pointer;
  .icon {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.textcolor};

  }
`

export default RegisterNav