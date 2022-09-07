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
        <div>
          content
        </div>

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

export default DashboardHome