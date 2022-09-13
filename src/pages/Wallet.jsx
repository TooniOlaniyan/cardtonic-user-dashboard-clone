import React , {useState} from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import eye from '../asset/images/eye.svg'
import walletLink from '../asset/images/walletLink.svg'
import walletGreen from '../asset/images/walletGreen.svg'
import { Link } from 'react-router-dom'
import successful from '../asset/images/successful.svg'
import failed from '../asset/images/failed.svg'
import pending from '../asset/images/pending.svg'
import Table from '../shared/Table'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
function Wallet() {
    const [show, setShow] = useState(false)
    const [bankData , setBankData] = useState([])
    const [showAccount , setShowAccount] = useState(false)
    const handleClick = () => {
      setShow(!show)
    }

    const handleVisible = () => {
      setShowAccount(true)

    }
    const fetchData = async () => {
     try {
      const response = await axios.get('https://api.paystack.co/bank')
      const data = response.data.data
      setBankData([data])
      
      
      
    
      
     } catch (error) {
      console.log('cant connect')
      
     }
    }
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          {showAccount && (
            <div className='AccountContainer'>
              <div className='AccountContent'>
                <Button onClick={() => setShowAccount(false)}>
                  <GrFormClose />
                </Button>
                <select name='banks' id='banks'>
                  <option value=''>Select Bank</option>
                  <option value='access' id='access' >Access Bank</option>
                  <option value='citibank' id='citibank'>Citibank</option>
                  <option value='diamond' id='diamond'>Diamond Bank</option>
                  <option value='ecobank' id='ecobank'>Ecobank</option>
                  <option value='fidelity' id='fidelity'>Fidelity Bank</option>
                  <option value='firstbank' id='firstbank'>First Bank Of Nigeria</option>
                  <option value='fcmb' id='fcmb'>First City Monument Bank (FCMB)</option>
                  <option value='fsdh' id='fsdh'>FSDH Merchant Bank</option>
                  <option value='gtb' id='gtb'>Guarantee Trust Bank (GTB)</option>
                  <option value='heritage' id='heritage'>Heritage Bank</option>
                  <option value='Keystone' id='keystone'>Keystone Bank</option>
                  <option value='polaris' id='polaris'>Polaris Bank</option>
                  <option value='providus' id='providus'>Providus Bank</option>
                  <option value='rand' id='rand'>Rand Merchant Bank</option>
                  <option value='skye' id='skye'>Skye Bank</option>
                  <option value='stanbic' id='stanbic'>Stanbic IBTC Bank</option>
                  <option value='standard' id='standard'>Standard Chartered Bank</option>
                  <option value='sterling' id='sterling'>Sterling Bank</option>
                  <option value='suntrust' id='suntrust'>Suntrust Bank</option>
                  <option value='union' id='union'>Union Bank</option>
                  <option value='uba' id='uba'>United Bank for Africa (UBA)</option>
                  <option value='unity' id='unity'>Unity Bank</option>
                  <option value='wema' id='wema'>Wema Bank</option>
                  <option value='zenith' id='zenith'>Zenith Bank</option>
                </select>
                <input type='text'  id='account' placeholder='Account Number' />
                <input type='text'  className='noselect' placeholder='Account Name' disabled />
                <div onClick={fetchData} className='save'>
                  <p>
                    Save <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className='top'>
            <div className='cardOne'>
              <div className='deposit'>
                <img
                  onClick={handleClick}
                  style={{ cursor: 'pointer' }}
                  src={eye}
                  alt=''
                />
                {show ? (
                  <p className='assets'>
                    {' '}
                    &#8358; 0.<span>00</span>{' '}
                  </p>
                ) : (
                  <p className='money'>**********</p>
                )}
                <p>Your Wallet Funds</p>
              </div>
              <div>
                <Link to='/wallet'>
                  <img style={{ cursor: 'pointer' }} src={walletLink} alt='' />
                </Link>
              </div>
            </div>
            <div className='cardTwo'>
              <div>
                <p>Withdraw Funds</p>
              </div>
              <div>
                <Link to='/start-trade'>
                  <img
                    style={{ cursor: 'pointer', fill: '#00d9a7' }}
                    src={walletGreen}
                    alt=''
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='middle'>
            <div className='successCard'>
              <div>
                <img src={successful} alt='' />
                <p>Successful</p>
              </div>
              <p>5</p>
            </div>
            <div className='failedCard'>
              <div>
                <img src={failed} alt='' />
                <p>Failed</p>
              </div>
              <p>2</p>
            </div>
            <div className='pendingCard'>
              <div>
                <img src={pending} alt='' />
                <p>Pending</p>
              </div>
              <p>0</p>
            </div>
            <div className='gift'>
              <p>Withdrawal </p>
              <span>History</span>
            </div>
          </div>
          <ButtomTable>
            <Table />
          </ButtomTable>
          <Account>
            <div onClick={handleVisible} className='details'>
              <p>Account Details </p>
              <MdKeyboardArrowRight className='icon' />
            </div>
          </Account>
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
  .AccountContainer {
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
    .AccountContent {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.white};
      width: 60%;
      height: 40%;
      border-radius: 1.6rem;
      padding: 13rem 3rem;
      gap: 1rem;
      position: relative;
      margin-top: -8rem;
      .noselect {
        background-color: transparent;
        ::-webkit-input-placeholder {
          color: ${({ theme }) => theme.colors.gray};
        }
        ::-moz-placeholder {
          color: ${({ theme }) => theme.colors.gray};
        }
      }
      .icons {
        position: absolute;
        top: 0;
        right: 0;
      }
      select {
        padding: 1.5rem;
        width: 80%;
        border-radius: 1.2rem;
        border: 1px solid ${({ theme }) => theme.colors.lightblue};
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 18px !important;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.textcolor};
        font-family: 'Lato', sans-serif;
        cursor: pointer;
        position: relative !important;
        &:focus {
          outline: none;
        }
      }
      input {
        width: 80%;
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
      .save {
        cursor: pointer;
        p {
          background-color: ${({ theme }) => theme.colors.black};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 1rem 3rem;
          border-radius: 1rem;
          color: ${({ theme }) => theme.colors.lightblue1};
        }
      }
    }
  }
  .top {
    display: flex;
    gap: 0.7rem;

    .cardOne {
      display: flex;
      background-color: ${({ theme }) => theme.colors.white};
      justify-content: center;
      align-items: center;
      gap: 6rem;
      padding: 1.3rem;
      border-radius: 1.8rem;

      .deposit {
        .money {
          font-size: 30px;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.textcolor};
        }
        .assets {
          font-size: 30px;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.textcolor};
          span {
            font-size: 27px;
            font-weight: 900;
            color: ${({ theme }) => theme.colors.gray};
          }
        }
      }
    }
  }
  .cardTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 1.3rem;
    border-radius: 1.8rem;

    background-color: ${({ theme }) => theme.colors.darkblue};
    p {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      font-size: 21px;
    }
  }

  .middle {
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
    gap: 0.7rem;
    .successCard,
    .failedCard,
    .pendingCard {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 24%;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 1.7rem 0rem;
      border-radius: 1.5rem;
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 30px;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.6rem;
        p {
          font-weight: 500;
          font-size: 15px;
          color: ${({ theme }) => theme.colors.gray};
        }
      }
    }
    .gift {
      text-align: end;
      display: flex;
      font-weight: 900;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.textcolor};
      justify-self: right;
      margin-left: 6rem;
      align-self: center;

      span {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const ButtomTable = styled.div``
const Account = styled.div`
  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    width: 60%;
    padding: 1.3rem 2rem;
    border-radius: 1.1rem;
    cursor: pointer;
    p {
      color: ${({ theme }) => theme.colors.textcolor};
      font-weight: 900;
      font-size: 18px;
    }
    .icon {
      color: ${({ theme }) => theme.colors.lightblue1};
      font-size: 20px;
      border: 2px solid ${({ theme }) => theme.colors.lightblue1};
      border-radius: 0.5rem;
    }
  }
`
 const Button = styled.div`
   position: absolute;
   top: 1rem;
   right: 1rem;
   border: 3px solid ${({ theme }) => theme.colors.textcolor};
   padding: 0.25rem;
   border-radius: 0.8rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
 `


export default Wallet