import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import { FaArrowRight } from 'react-icons/fa'
import NavBar from '../component/NavBar'
import AppleImg from '../asset/images/AppleImg.png'
import RazerImg from '../asset/images/RazerImg.png'
import staemImg from '../asset/images/staemImg.png'
import Walmart from '../asset/images/Walmart.png'

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
            <div className='cardInfo topInfo'>
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
                  <img src={staemImg} alt='' />
                  <p className='cardName'>Staem</p>
                </div>
                <p>Uk steam physical </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={RazerImg} alt='' />
                  <p className='cardName'>Razer</p>
                </div>
                <p>USA Razer Gold Gift Card (50 and above) </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={staemImg} alt='' />
                  <p className='cardName'>Staem</p>
                </div>
                <p>UK Steam Ecode £ </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={RazerImg} alt='' />
                  <p className='cardName'>Razer</p>
                </div>
                <p>CHF Steam Physical </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={AppleImg} alt='' />
                  <p className='cardName'>Apple/iTunes</p>
                </div>
                <p>USA Steam Physical $ </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={AppleImg} alt='' />
                  <p className='cardName'>Apple/iTunes</p>
                </div>
                <p>USA Razer Gold Gift Card (5-49) </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={AppleImg} alt='' />
                  <p className='cardName'>Apple/iTunes</p>
                </div>
                <p>Greece Apple/iTunes Physical </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={RazerImg} alt='' />
                  <p className='cardName'>Staem</p>
                </div>
                <p>Luxembourg Apple/iTunes Physical </p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={staemImg} alt='' />
                  <p className='cardName'>Staem</p>
                </div>
                <p>Portugal Apple/iTunes Physical</p>
                <span>555</span>
              </div>
              <div className='tableData'>
                <div className='cardIcon'>
                  <img src={Walmart} alt='' />
                  <p className='cardName'>Staem</p>
                </div>
                <p>Walmart VISA 4786/4852(200 Above) </p>
                <span>555</span>
              </div>
            </CardTable>
            <div className='cardInfo buttomInfo'>
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
  background-color: ${({ theme }) => theme.colors.body};
  transition: all 0.5s;
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
  @media screen and (max-width: 640px) {
    height: 100vh;
    padding: 0.5rem;
    align-items: center;
  }
  header {
    text-align: end;
    @media screen and (max-width: 640px) {
      text-align: right;
      width: 90%;
    }
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
  transition: all 0.5s;
  @media screen and (max-width: 640px) {
    width: 90vw;
    justify-content: center;
    padding: 3rem 1rem;
    justify-content: flex-start;
  }
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
      background-color: transparent;
      cursor: pointer;
      @media screen and (max-width: 640px) {
        font-size: 15px;
        font-weight: 600;
        width: 100%;
        padding: 1rem;
      }
      option {
        background-color: ${({ theme }) => theme.colors.white};
      }
      &:focus {
        outline: none;
      }
      optgroup[label] {
        font-weight: 400;
        font-size: 17px;
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .CashAmount {
    width: 70%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 640px) {
      width: 100%;
    }

    input {
      flex: 4;
      padding: 1rem;
      border-radius: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textcolor};
      font-size: 17px;
      font-family: 'Lato', sans-serif;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      background-color: transparent;
      @media screen and (max-width: 640px) {
        font-size: 15px;
        padding: 1rem;
        width: 100%;
      }
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
    width: 70%;
    gap: 3rem;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }
    .amount {
      padding: 1rem;
      flex: 1;
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.lightblue3};
      border-radius: 1rem;
      @media screen and (max-width: 640px) {
        width: 100%;
      }

      p {
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-weight: 900;
        font-size: clamp(0.5rem, 1.5vw, 1.4rem);
        color: ${({ theme }) => theme.colors.lightgreen};
        @media screen and (max-width: 640px) {
          font-size: 20px;
        }
        span {
          font-size: 16px;
        }
      }
    }
    .start-trade {
      cursor: pointer;
      margin-top: 1rem;
      @media screen and (max-width: 640px) {
        margin-top: 0;
      }
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
  gap: 0.8rem;
  margin-top: 4.5rem;
  flex-direction: column;
  transition: all 0.5s;
  @media screen and (max-width: 640px) {
    width: 90vw;
    justify-content: center;
    padding: 3rem 1rem;
    justify-content: flex-start;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      color: ${({ theme }) => theme.colors.textcolor};
      /* background-color: red; */
      font-size: 16.5px;
      @media screen and (max-width: 640px) {
        font-size: 16px;
      }
    }
  }
  .buttomInfo {
    margin-top: 7rem;
    @media screen and (max-width: 640px) {
      margin-top: 4rem;
    }
  }
  .topInfo {
    margin-bottom: 2rem;
    @media screen and (max-width: 640px) {
      margin-bottom: 2rem;
      
    }
  }
`
const CardTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100vh;
  @media screen and (max-width: 640px) {
    height: 100vh;
  }
  .tableHead {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    p {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: 15px;
      @media screen and (max-width: 640px) {
        font-size: 14px;
      }
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
    margin-bottom: 2rem;
  }
  .tableData {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .cardName {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: 13px;
      flex: 1;
      text-align: start;
      @media screen and (max-width: 640px) {
        font-size: 10px;
      }
    }

    p {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkblue};
      font-size: 13px;
      flex: 1;
      text-align: center;
      @media screen and (max-width: 640px) {
        font-size: 11px;
      }
    }
    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 13px;
      flex: 1;
      /* background-color: green; */
      text-align: end;
      @media screen and (max-width: 640px) {
        font-size: 12px;
      }
    }
    .cardIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      gap: 0.5rem;
      p {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.darkblue};
        font-size: 13px;
        @media screen and (max-width: 640px) {
          font-size: 12px;
        }
      }
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        @media screen and (max-width: 640px) {
          display: none;
        }
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