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
import {ReactComponent as arrowRight} from '../asset/images/arrowRight.svg'
function Wallet() {
    const [show, setShow] = useState(false)
    const handleClick = () => {
      setShow(!show)
    }
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
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
            <div>
              <p>Account Number <arrowRight/>  </p>
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
/* background-color: red; */




`


export default Wallet