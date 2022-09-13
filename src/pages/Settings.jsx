import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
function Settings() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0.1rem 6rem 3rem 6rem;
  height: 83vh;
  overflow-y: scroll;
  
  
  
  `

export default Settings