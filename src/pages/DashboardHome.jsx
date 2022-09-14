import React , {useState} from 'react'
import SideBar from '../component/SideBar'
import styled from 'styled-components'
import NavBar from '../component/NavBar'
import eye from '../asset/images/eye.svg'
import walletLink from '../asset/images/walletLink.svg'
import startTradeLink from '../asset/images/startTradeLink.svg'
import {Link} from 'react-router-dom'
import Table from '../shared/Table'

function DashboardHome() {
  const [show , setShow] = useState(false)
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
                {show ? <p className='assets'> &#8358; 0.<span>00</span> </p> : <p className='money'>**********</p>}
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
                <p>Start Trade</p>
              </div>
              <div>
                <Link to='/start-trade'>
                  <img
                    style={{ cursor: 'pointer' }}
                    src={startTradeLink}
                    alt=''
                  />
                </Link>
              </div>
            </div>
            <div className='dashboard'>
              <p>Dashboard</p>
            </div>
          </div>

          <ButtomTable>
            <Table/>
          </ButtomTable>
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
  @media screen and (max-width: 640px) {
    /* background-color: red; */
    overflow: hidden;
  }
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
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.7rem;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }

    .cardOne {
      display: flex;
      background-color: ${({ theme }) => theme.colors.white};
      justify-content: center;
      align-items: center;
      gap: 6rem;
      padding: 1.3rem 0rem;
      border-radius: 1.5rem;
      flex: 1.6;
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
    gap: 6rem;
    padding: 1.3rem 0rem;
    border-radius: 1.5rem;
    flex: 1.4;

    background-color: ${({ theme }) => theme.colors.darkblue};
    p {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      font-size: 21px;
    }
  }
  .dashboard {
    display: flex;
    align-items: flex-end;
    flex: 1;
    flex-direction: row-reverse;
    padding: 1.3rem 0rem;
    cursor: pointer;

    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.darkblue};
  }
`

const ButtomTable = styled.div`
  
`

export default DashboardHome