import React  , {useState}from 'react'
import styled from 'styled-components'
import desktopLogo from '../asset/images/desktopLogo.svg'
import reward from '../asset/images/reward.svg'
import star from '../asset/images/star.svg'
import dashboard from '../asset/images/dashboard.svg'
import start from '../asset/images/start.svg'
import transaction from '../asset/images/transaction.svg'
import wallet from '../asset/images/wallet.svg'
import calculator from '../asset/images/calculator.svg'
import settings from '../asset/images/settings.svg'
import {NavLink} from 'react-router-dom'

function SideBar() {
  return (
    <Main>
      <div>
        <img src={desktopLogo} alt='' />
      </div>

      <Middle>
        <Reward>
          <div className='images'>
            <img src={reward} alt='' />
            <img src={star} alt='' />
          </div>
        </Reward>
        <RewardText>
          <p>Total Points Available</p>
          <span>
            0. <span className='decimal'>00</span>{' '}
          </span>
        </RewardText>
      </Middle>

      <Links>
        <NavLink to='/dashboard'>
          <div className={'links'}>
            <div className='imageContainer'>
              <div className='image'>
                <img  src={dashboard} alt='' />
              </div>
            </div>
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to='/start-trade'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <img src={start} alt='' />
              </div>
            </div>
            <p>Start Trade</p>
          </div>
        </NavLink>
        <NavLink to='/transactions'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <img src={transaction} alt='' />
              </div>
            </div>
            <p>Transactions</p>
          </div>
        </NavLink>
        <NavLink to='/wallet'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <img src={wallet} alt='' />
              </div>
            </div>
            <p>Wallet</p>
          </div>
        </NavLink>
        <NavLink to='/calculator'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <img src={calculator} alt='' />
              </div>
            </div>
            <p>Calculator</p>
          </div>
        </NavLink>
        <NavLink to='/settings'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <img src={settings} alt='' />
              </div>
            </div>
            <p>Settings</p>
          </div>
        </NavLink>
      </Links>
    </Main>
  )
}

const Main = styled.div`
background-color: ${({theme}) => theme.colors.white};
height: 100vh;
gap: 2.7rem;
padding: 3rem 0;
display: flex;
flex-direction: column;
align-items: center;
flex: 1.13;
    
`
const Links = styled.div`
  width: 100%;

  a.active {
    p {
      color: ${({ theme }) => theme.colors.textcolor};
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;

      .image {
        width: 35%;
        height: 80%;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.lightblue1};
        
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 17px 20px 0 rgb(27 50 60 / 16%);
       img{
        color: white;
        fill: none;
       }
      }
    }
  }
  .links {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 4rem;
    width: 100%;

    .imageContainer {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;
      img{
        fill: '#cecece !important';
      }
    }
    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 700;
      text-align: start;
      flex: 1;
      width: max-content;
    }
  }

  a {
    text-decoration: none;
    transition: all 1s;
  }
`

const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 0.8rem;
    gap: 1rem;
    background-color: ${({theme})=> theme.colors.lightblue2};

   
    
`
const RewardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  align-items: flex-end;
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textcolor};
  }
  span {
    color: ${({ theme }) => theme.colors.lightblue1};
    font-size: 20px;
    font-weight: 900;
  }
  .decimal {
    color: ${({ theme }) => theme.colors.lightblue};
    font-size: 17px;
    font-weight: 900;
  }
`

const Reward = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
`

export default SideBar