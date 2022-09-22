import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import noTransaction from '../asset/images/noTransaction.gif'
import { FaArrowRight } from 'react-icons/fa'

function MobileTable() {
  return (
    <Main>
      <TableContainer>
        <Transaction>
          <div className='TransactionStatus'>
            <img src={noTransaction} alt='' />
            <p>You have no transaction with us yet. Why?</p>
          </div>
        </Transaction>
      </TableContainer>
      {/* <div className='getMore'>
        <Link to='/transactions'>
          <p>
            Get More <FaArrowRight fill='#00cede' />
          </p>
        </Link>
      </div> */}
      <ExternalLinks>
        <p>
          <a
            href='https://cardtonic.com/rate-calculator'
            target='_blank'
            rel='noreferrer'
          >
            Rate Calculator |
          </a>

          <a
            href='https://cardtonic.com/contact-us'
            target='_blank'
            rel='noreferrer'
          >
            Contact Us
          </a>
        </p>
      </ExternalLinks>
    </Main>
  )
}

const Main = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    .getMore {
      background-color: ${({ theme }) => theme.colors.lightgray};
      padding: 1rem;
      border-radius: 1.3rem;
      display: flex;
      align-self: flex-start;
      a {
        text-decoration: none;
      }
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const TableContainer = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3rem 2.8rem 2rem 2.8rem;
    max-height: 40vh;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    flex-direction: column;
    transition: all 0.5s;
  
  }
`
  const Transaction = styled.div`
  display: none;
    @media screen and (max-width: 640px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 1rem;
      /* height: 80vh; */
      .TransactionStatus {
        p {
          color: ${({ theme }) => theme.colors.gray};
          font-weight: 700;
          font-size: 14px;
          /* width: 80%; */
          text-align: center;
        }
      }
    }
  `
  const ExternalLinks = styled.div`
    display: none;
    @media screen and (max-width: 640px) {
        display: block;
      text-align: right;
      margin-top: 1rem;
      padding: 1rem;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.graytext};
        margin-right: 0.3rem;
      }
      p {
        color: ${({ theme }) => theme.colors.graytext};
        font-weight: 900;
        font-size: 13px;
      }
    }
  `

export default MobileTable