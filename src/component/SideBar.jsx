import React from 'react'
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
      <div className='links'>
        <img style={{fill: '#888'}} src={dashboard} alt="" />
        <p>Dashboard</p>
      </div>
      <div className='links'>
        <img src={start} alt="" />
        <p>Start Trade</p>
      </div>
      <div className='links'>
        <img src={transaction} alt="" />
        <p>Transactions</p>
      </div>
      <div className='links'>
        <img src={wallet} alt="" />
        <p>Wallet</p>
      </div>
      <div className='links'>
        <img src={calculator} alt="" />
        <p>Calculator</p>
      </div>
      <div className='links'>
        <img src={settings} alt="" />
        <p>Settings</p>
      </div>
      

      
      
      
      </Links>
    </Main>
  )
}

const Main = styled.div`
background-color: ${({theme}) => theme.colors.white};
height: 100vh;
gap: 3rem;
padding: 3rem 0;
display: flex;
flex-direction: column;
align-items: center;
flex: 1.15;
    
`
const Links = styled.div`
.links{
    display: flex;
    align-items: center;
    gap: 3rem;
    cursor: pointer;
    img{
        margin-bottom: 2.8rem;
    }
    p{
        margin-bottom: 2.8rem;
        font-size: 19px;
        color: ${({theme}) => theme.colors.gray};
        font-weight: 700;
    }
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