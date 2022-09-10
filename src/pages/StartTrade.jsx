import React , {useState} from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import { FaArrowRight } from 'react-icons/fa'
import upload from '../asset/images/upload.gif'
function StartTrade() {
  const [select , setSelect] = useState('')
  const handleChange = (e) => {
    setSelect(e.target.files)
    console.log(select)
    
    

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
              <input type='text' placeholder='Enter Trade Amount' />
              <div className='amount'>
                <p>
                  &#8358;0.00 <span>000</span>{' '}
                </p>
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
              {select ? (<label htmlFor='file'> {select.length} files(s) chosen </label>) : (<label htmlFor='file'>Upload Card + </label>)}
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
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    input {
      flex: 4;
      padding: 1.1rem;
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
    }
    .amount {
      padding: 0.8rem;
      flex: 1;
      background-color: ${({ theme }) => theme.colors.lightblue3};
      border-radius: 1.5rem;

      p {
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-weight: 900;
        font-size: 28px;
        color: ${({ theme }) => theme.colors.lightgreen};
        span {
          font-size: 18px;
        }
      }
    }
  }
  .start-trade {
    p {
      background-color: ${({ theme }) => theme.colors.black};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem 2rem;
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
export default StartTrade