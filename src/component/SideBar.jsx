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

        <div>
            <div>
                <img src={dashboard} alt="" />
                <p>Dashboard</p>
            </div>
            <div>
                <img src={start} alt="" />
                <p>Start Trade</p>
            </div>
            <div>
                <img src={transaction} alt="" />
                <p>Transactions</p>
            </div>
            <div>
                <img src={wallet} alt="" />
                <p>Wallet</p>
            </div>
            <div>
                <img src={calculator} alt="" />
                <p>Calculator</p>
            </div>
            <div>
                <img src={settings} alt="" />
                <p>Settings</p>
            </div>
        </div>

    </Main>
  )
}

const Main = styled.div`
background-color: ${({theme}) => theme.colors.white};
min-height: 100vh;
width: 18rem;
    
`

export default SideBar