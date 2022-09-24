import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

function Support({setSupport}) {
  return (
    <Container>
      <SupportLinks>
        <Button onClick={() => setSupport(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <a
          target='_blank'
          href='https://www.facebook.com/Cardtonic-112020283621022'
        >
          <div className='facebook'>
            <p>Facebook</p>
          </div>
        </a>
        <a target='_blank' href='https://www.instagram.com/cardtonic/'>
          <div className='insta'>
            <p>Instagram</p>
          </div>
        </a>
        <a target='_blank' href='https://twitter.com/cardtonic'>
          <div className='tweet'>
            <p>Twitter</p>
          </div>
        </a>
        <span></span>
        <a
          target='_blank'
          href='https://api.whatsapp.com/send?phone=2347060502770'
        >
          <div className='watsapp'>
            <p>Watsapp</p>
          </div>
        </a>
        <a target='_blank' href=''>
          <div className='phone'>
            <p>Mobile | Phone</p>
          </div>
        </a>
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
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 56%;
  height: 58%;
  border-radius: 1.6rem;
  padding: 13rem 4rem;
  gap: 1rem;
  position: relative;
  margin-top: -1rem;
  @media screen and (max-width: 640px) {
    width: 80%;
    height: 70%;
    padding: 13rem 2rem;
  }
  a {
    text-decoration: none;
  }
  span {
    width: 30%;
    /* background-color: ${({ theme }) => theme.colors.lightgray}; */
    height: 1px !important;
    background-color: red;
    display: block;
    opacity: 1 !important;
  }

  .facebook {
    background-color: ${({ theme }) => theme.colors.textcolor};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    border-radius: 1rem 2rem;
    p {
      color: ${({ theme }) => theme.colors.support};
    }
  }
  .insta {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    border-radius: 1rem 2rem;
    p {
      color: ${({ theme }) => theme.colors.support};
    }
  }

  .tweet {
    background-color: ${({ theme }) => theme.colors.lightblue1};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    border-radius: 1rem 2rem;
    p {
      color: ${({ theme }) => theme.colors.support};
    }
  }
  .watsapp {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    border-radius: 1rem 2rem;
    p {
      color: ${({ theme }) => theme.colors.support};
    }
  }
  .phone {
    background-color: ${({ theme }) => theme.colors.darkblue};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 4rem;
    border-radius: 1rem 2rem;
    p {
      color: ${({ theme }) => theme.colors.support};
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

export default Support