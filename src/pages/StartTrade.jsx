import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
function StartTrade() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <header>
            <p>Start Trade</p>
          </header>
          <Trade>

          </Trade>
          


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
  header {
    text-align: end;
    p {
      font-weight: 900;
      font-size: 30px;
      color: ${({ theme }) => theme.colors.darkblue};
    }
  }
`
const Trade = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 2.8rem 2rem 2.8rem;
  height: 100vh;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-direction: column;
`
export default StartTrade