import React , {useState} from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import { FaArrowRight } from 'react-icons/fa'
import upload from '../asset/images/upload.gif'
function StartTrade() {
  const [select , setSelect] = useState('')
  const [amount , setAmount] = useState('')
  const handleChange = (e) => {
    setSelect(e.target.files)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    

  }
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <header>
            <p>Start Trade</p>
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
                onChange={handleAmount}
                type='number'
                placeholder='Enter Trade Amount'
              />
              <div className='amount'>
                <p>&#8358;{amount ? parseInt(amount * 180) : 0.0}</p>
              </div>
            </div>
            <div className='comments'>
              <textarea
                name=''
                id=''
                cols='30'
                rows='2'
                placeholder='Optional Comment, e.g You can type your code here'
              ></textarea>
            </div>
            <div className='upload'>
              {select ? (
                <label htmlFor='file'> {select.length} files(s) chosen </label>
              ) : (
                <label htmlFor='file'>Upload Card + </label>
              )}
              <label htmlFor='file'>
                <img ht src={upload} alt='' />
              </label>
              <input
                multiple
                onChange={handleChange}
                style={{ display: 'none' }}
                type='file'
                accept='image/*'
                id='file'
              />
            </div>
            <div className='start-trade'>
              <p>
                Start Trade <FaArrowRight />
              </p>
            </div>
          </Trade>
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
  padding: 3rem 2.8rem 2rem 2.8rem;
  height: 100vh;
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  flex-direction: column;
  .comments {
    width: 100%;
    textarea {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      border-radius: 1.2rem;
      padding: 1.5rem 0.5rem 0.2rem 0.5rem;
      display: flex;
      align-items: center;
      resize: none;
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.textcolor};
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }

      &:focus {
        outline: none;
      }
    }
  }
  .CashAmount {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    input {
      flex: 4;
      padding: 1.1rem;
      border-radius: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textcolor};
      background-color: transparent;
      font-size: 17px;
      font-family: 'Lato', sans-serif;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      ::-moz-placeholder {
        color: ${({ theme }) => theme.colors.textcolor};
      }
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &:focus {
        outline: none;
      }
    }
    .amount {
      padding: 0.8rem;
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
        text-f span {
          font-size: 1.4vw;
        }
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
  .cards,
  .CardSubCategory {
    width: 100%;
    select {
      padding: 1.5rem;
      width: 75%;
      border-radius: 1.2rem;
      border: 1px solid ${({ theme }) => theme.colors.lightblue};
      -webkit-appearance: none;
      -moz-appearance: none;
      font-size: 18px !important;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textcolor};
      background-color: transparent;
      font-family: 'Lato', sans-serif;
      cursor: pointer;
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

  .upload {
    width: 100%;
    padding: 1.5rem;
    border-radius: 1.2rem;
    gap: 16rem;
    label {
      font-weight: 900;
      font-size: 18px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.textcolor};
    }

    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.lightblue};
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
export default StartTrade