import React from 'react'
import SideBar from '../component/SideBar'
import styled from 'styled-components'
import NavBar from '../component/NavBar'
import eye from '../asset/images/eye.svg'
import walletLink from '../asset/images/walletLink.svg'
import startTradeLink from '../asset/images/startTradeLink.svg'

function DashboardHome() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <div className='top'>
            <div className='cardOne'>
              <div className='deposit'>
                <img src={eye} alt='' />
                <p className='money'>**********</p>
                <p>Your Wallet Funds</p>
              </div>
              <div>
                <img src={walletLink} alt='' />
              </div>
            </div>
            <div className='cardTwo'>
              <div>
                <p>Start Trade</p>
              </div>
              <div>
                <img src={startTradeLink} alt='' />
              </div>
            </div>
            <div className='dashboard'>
              <p>Dashboard</p>
            </div>
          </div>

          <div className='bottomTabel'></div>
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

  padding: 0.5rem 7rem;
  height: 83vh;
  overflow-y: scroll;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.5rem;

    .cardOne {
      display: flex;
      background-color: ${({ theme }) => theme.colors.white};
      justify-content: center;
      align-items: center;
      gap: 6rem;
      padding: 1.3rem 0rem;
      border-radius: 1.5rem;
      flex: 1.8;
      .deposit {
        .money{
          font-size: 30px;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.textcolor};
    };
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
      flex: 1.56;

      background-color: ${({ theme }) => theme.colors.darkblue};
      p{
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

      font-size: 30px;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.darkblue};
    }
  }
`

export default DashboardHome