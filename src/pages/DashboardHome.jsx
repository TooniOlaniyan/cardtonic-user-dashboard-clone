import React from 'react'
import SideBar from '../component/SideBar'
import styled from 'styled-components'
import NavBar from '../component/NavBar'

function DashboardHome() {
  return (
    <div>
      <SideBar/>
      <MainContainer>
        <NavBar/>
        Content

      </MainContainer>
    </div>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex: 3;
`

export default DashboardHome