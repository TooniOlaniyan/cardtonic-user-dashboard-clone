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
              <div className='desposit'>
                <img src={eye} alt='' />
                <p>*******</p>
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
    align-items: center;
    gap: 1rem;

    .cardOne {
      display: flex;
      background-color: ${({ theme }) => theme.colors.white};
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 1.5rem 1rem;
      border-radius: 1.5rem;
      flex: 1;
      .deposit {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    .cardTwo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 1.5rem 2rem;
      border-radius: 1.5rem;
      flex: 1;

      background-color: ${({ theme }) => theme.colors.white};
    }
    .dashboard {
      flex: 1;
      background-color: red;
      padding: 1.5rem 2rem;
      border-radius: 1.5rem;
    }
  }
`

export default DashboardHome