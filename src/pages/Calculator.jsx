import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import { FaArrowRight } from 'react-icons/fa'
import NavBar from '../component/NavBar'

function Calculator() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <header>
            <p>Rates Calculator</p>
          </header>
          <Trade>
            <div className='cards'>
              <select name='card' id=''>
                <option value='' disabled selected hidden>
                  Select Category
                </option>
                <optgroup label='Select Category'>
                  <option value='apple'>Amazon Gift Card</option>
                  <option value='melon'>Blue Apron Gift Card</option>
                  <option value='melon'>Disney+ 1-Year Subscription</option>
                  <option value='melon'>Etsy Gift Card</option>
                  <option value='melon'>Sephora Gift Card</option>
                  <option value='melon'>Audible Subscription Gift Card</option>
                  <option value='melon'>Happy You Gift Card</option>
                  <option value='melon'>Starbucks Gift Card</option>
                  <option value='melon'>Universal Standard Gift Card</option>
                  <option value='melon'>Goldbelly Gift Card</option>
                  <option value='melon'>Stockpile Gift Card</option>
                  <option value='melon'>Bifties Gift Card</option>
                  <option value='melon'>iTunes Gift Card</option>
                  <option value='melon'>Victoria’s Secret Gift Card</option>
                  <option value='melon'>Sephora Gift Card</option>
                  <option value='melon'>Target Gift Card</option>
                  <option value='melon'>Best Buy Gift Card</option>
                  <option value='melon'>Chipotle Gift Card</option>
                  <option value='melon'> Fandango Gift Card</option>
                  <option value='melon'>MasterCard Gift Card</option>
                </optgroup>
              </select>
            </div>
            <div className='CardSubCategory'>
              <select name='subCategory' id=''>
                <option value='' disabled selected hidden>
                  Select Sub-Category
                </option>
                <optgroup label='Select Sub-Category'>
                  <option value=''>Canada Amazon (Cash/Debit Receipt)</option>
                  <option value=''>Canada Amazon (Credit/No Receipt)</option>
                  <option value=''>Canada Amazon Ecode</option>
                  <option value=''>Germany Amazon (Cash Receipt)</option>
                  <option value=''>Germany Amazon (No Receipt)</option>
                  <option value=''>Germany Amazon Ecode</option>
                  <option value=''>Uk Amazon (Cash Receipt)</option>
                  <option value=''>
                    Uk Amazon Cash/Debit Activation Receipt
                  </option>
                  <option value=''>Uk Amazon Ecode</option>
                  <option value=''>Uk Amazon No Receipt</option>
                  <option value=''>USA Amazon (10-49)</option>
                  <option value=''>USA Amazon Cash Receipt (101-200)</option>
                  <option value=''>USA Amazon Cash Receipt (201-499)</option>
                  <option value=''>USA Amazon Cash Receipt (500)</option>
                </optgroup>
              </select>
            </div>
            <div className='CashAmount'>
              <input
                id='amount'
                type='number'
                placeholder='Enter Trade Amount'
              />
            </div>
            <div className='start'>
              <div className='amount'>
                <p>
                  &#8358;0.00 <span>000</span>{' '}
                </p>
              </div>
              <div className='start-trade'>
                <p>
                  Start Trade <FaArrowRight />
                </p>
              </div>
            </div>
          </Trade>
          <CardList>
            <div className='cardInfo'>
              <p>
                Listed below are the top 10 best gift cards to sell in Nigeria
                at the moment, ranked according to the best rates in descending
                order. It is updated automatically.
              </p>
            </div>
            <CardTable>
              <div className='tableHead'>
                <p>Categotry</p>
                <p>Sub-Categotry</p>
                <span>Rate</span>
              </div>
              <div className='line'></div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src="" alt="" />
                  <p>Staem</p>
                </div>
                <p>Uk steam physical </p>
                <span>555</span>
              </div>
            </CardTable>
            <div className='cardInfo'>
              <p>
                Rates specified on this page are accurate as at the time it’s
                checked. However, rates change continually, and what the rate is
                at the moment may change in the next minute. If you leave the
                tab open, always reload the page before checking current rates.
              </p>
              <p>
                Cardtonic gift card rates are mostly above market average in
                Nigeria, which is because we have the interest of customers at
                heart. So, you can be rest assured that the rate you see here is
                among the best possible rates you can sell your gift card in
                Nigeria.
              </p>
            </div>
          </CardList>
          <ExternalLinks>
            <p>
              <a href='https://cardtonic.com/rate-calculator' target='_blank'>
                Rate Calculator
              </a>
              |{' '}
              <a href='https://cardtonic.com/contact-us' target='_blank'>
                Contact Us
              </a>
            </p>
          </ExternalLinks>
        </Content>
      </MainContainer>
    </Main>
  )
}
const MainContainer = styled.div`
  display: flex;
  flex: 4.5;
  flex-direction: column;
  gap: 1rem;
`
const Main = styled.div`
  display: flex;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.1rem 6rem 3rem 6rem;
  height: 83vh;
  overflow-y: scroll;
  header {
    text-align: end;
    p {
      font-weight: 900;
      font-size: 30px;
      color: ${({ theme }) => theme.colors.darkblue};
    }
  }
`
const Trade = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.8rem;
  flex-direction: column;
  .cards,
  .CardSubCategory {
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: center;
    select {
      width: 70%;
      padding: 1rem;
      border-radius: 1.2rem;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 18px !important;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textcolor};
      font-family: 'Lato', sans-serif;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      optgroup[label] {
        font-weight: 400;
        font-size: 17px;
      }
    }
  }
  .CashAmount {
    width: 70%;
    display: flex;
    justify-content: center;

    input {
      flex: 4;
      padding: 1rem;
      border-radius: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textcolor};
      font-size: 17px;
      font-family: 'Lato', sans-serif;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      ::-moz-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      &:focus {
        outline: none;
      }
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }
  .start {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* background-color: red; */
    width: 70%;
    gap: 3rem;
    .amount {
      padding: 1rem;
      flex: 1;
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.lightblue3};
      border-radius: 1rem;

      p {
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-weight: 900;
        font-size: clamp(0.5rem, 1.5vw, 1.4rem);
        color: ${({ theme }) => theme.colors.lightgreen};
        span {
          font-size: 16px;
        }
      }
    }
    .start-trade {
      cursor: pointer;
      margin-top: 1rem;
      p {
        background-color: ${({ theme }) => theme.colors.black};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 1.2rem 2rem;
        border-radius: 1rem;
        color: ${({ theme }) => theme.colors.lightblue1};
      }
    }
  }
  
`
const CardList = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6rem 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.8rem;
  flex-direction: column;
  .cardInfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      color: ${({ theme }) => theme.colors.textcolor};
      /* background-color: red; */
      font-size: 16.5px;
    }
  }
`
const CardTable = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100vh;
  .tableHead {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    p {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: 15px;
    }
    span {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 15px;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
  .tableData {
    display: flex;
    align-items: center;
    /* background-color: yellow; */
    width: 100%;
    justify-content: space-between;
    p {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: 13px;
    }
    span {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 13px;
    }
    .cardIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.darkblue};
        font-size: 13px;
      }
    }
  }
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
    font-size: 12px;
  }
`

export default Calculator