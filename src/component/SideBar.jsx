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
            <img src={desktopLogo} alt="" />

        </div>

        <div>
            <img src={reward} alt="" />
            <img src={star} alt="" />
            <p>Total Points Available</p>
            <p>0. <span>00</span>  </p>
        </div>

        <Links>
            <div className='LinksContainer'>
                <img style={{fill:'red'}} src={dashboard} alt="" />
                <p>Dashboard</p>
            </div>
            <div className='LinksContainer'>
                <img src={start} alt="" />
                <p>Start Trade</p>
            </div>
            <div className='LinksContainer'>
                <img src={transaction} alt="" />
                <p>Transactions</p>
            </div>
            <div className='LinksContainer'>
                <img src={wallet} alt="" />
                <p>Wallet</p>
            </div>
            <div className='LinksContainer'>
                <img src={calculator} alt="" />
                <p>Calculator</p>
            </div>
            <div className='LinksContainer'>
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
gap: 2rem;
padding: 2.5rem 0;
display: flex;
flex-direction: column;
align-items: center;
flex: 1.15;
    
`
const Links = styled.div`
.LinksContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-bottom: 2rem;
}
    
`

export default SideBar