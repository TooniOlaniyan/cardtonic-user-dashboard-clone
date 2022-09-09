import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import noTransaction from '../asset/images/noTransaction.gif'
import { FaArrowRight } from 'react-icons/fa'

function Table() {
  return (
    <>
      <TableCOntainer>
        <TableHead>
          <p>Gift Card</p>
          <p>Date | Time</p>
          <p>
            Amount <span>| Rate</span>
          </p>
          <p>NGN</p>
          <p>Status</p>
          <p>Type</p>
        </TableHead>
        <div className='line'></div>
        <Transaction>
          <div className='TransactionStatus'>
            <img src={noTransaction} alt='' />
          </div>
        </Transaction>
        <div className='getMore'>
          <Link to='/transactions'>
            <p>
              Get More <FaArrowRight fill='#00cede' />
            </p>
          </Link>
        </div>
      </TableCOntainer>
      <ExternalLinks>
        <p>
          <a href='https://cardtonic.com/rate-calculator' target='_blank'>
            Rate Calculator
          </a>
          | <a href='https://cardtonic.com/contact-us' target='_blank'>Contact Us</a>
        </p>
      </ExternalLinks>
    </>
  )
}

const TableCOntainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2.8rem 2rem 2.8rem;
  height: 80vh;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-direction: column;
  .line {
    width: 100%;
    height: 0.1rem;
    opacity: 0.3;
    background-color: ${({ theme }) => theme.colors.gray};
  }
  .getMore {
    background-color: ${({ theme }) => theme.colors.lightgray};
    padding: 1rem;
    border-radius: 1.3rem;
    display: flex;
    align-self: flex-end;
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
 
`
const TableHead = styled.div`
  display: flex;
  gap: 5rem;
  width: 100%;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.darkblue};
  font-weight: 600;
  font-size: 14px;
  span {
    color: ${({ theme }) => theme.colors.lightblue1};
  }
`
const Transaction = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
border-radius: 1rem;
margin-top: 0.5rem;
height: 80vh;
  
`
const ExternalLinks = styled.div`
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
`

export default Table