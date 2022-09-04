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
    width: 100vw;
    max-height: 1rem ;
    display: flex;
    justify-content: center;
    gap: 73rem;
    align-items: center;
    padding: 7rem 0;
    .Logo{
      .image{
        width: 13rem;

      }
    }

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