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