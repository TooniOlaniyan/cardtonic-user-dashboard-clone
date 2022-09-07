import React from 'react'
import SideBar from '../component/SideBar'
import styled from 'styled-components'
import NavBar from '../component/NavBar'

function DashboardHome() {
  return (
    <Main>
      <SideBar/>
      <MainContainer>
        <NavBar/>
        <Content>
          <div className='cardOne'>
            <div>
              <img src="" alt="" />
              <p>*******</p>
              <p>Your Wallet Funds</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className='cardTwo'>
            <div>
              <p>Start Trade</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>

          </div>
          <div>
            <p>
              Dashboard
            </p>
          </div>
          <div className='top'>

          </div>
          <div className='bottomTabel'>

          </div>
          
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
  
  padding: 1rem;
  height: 83vh;
  overflow-y: scroll;
`

export default DashboardHome