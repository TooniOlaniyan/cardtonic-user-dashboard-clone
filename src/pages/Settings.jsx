import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import { MdKeyboardArrowRight } from 'react-icons/md'
function Settings() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <Setting>
            <div className='settingOptions'>
              <p>Profile</p>
              <MdKeyboardArrowRight className='icons'/>
            </div>
            <div className='settingOptions'>
              <p>Security</p>
              <MdKeyboardArrowRight className='icons'/>
            </div>
            <div className='settingOptions'>
              <p>Suggestion Box</p>
              <MdKeyboardArrowRight className='icons'/>
            </div>
            <div className='settingOptions'>
              <p>Support</p>
              <MdKeyboardArrowRight className='icons'/>
            </div>
            <div className='settingOptions'>
              <p>Share With Friends</p>
              <MdKeyboardArrowRight className='icons'/>
            </div>

          </Setting>

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
  const Setting = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 4rem;
    height: 100vh;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex-direction: column;

    .settingOptions {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      width: 75%;
      padding: 1.5rem 2.5rem;
      justify-content: space-between;
      border-radius: 1.5rem;
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.textcolor};
      }
      .icons {
        color: ${({ theme }) => theme.colors.lightblue1};
        font-size: 20px;
        border: 2px solid ${({ theme }) => theme.colors.lightblue1};
        border-radius: 0.5rem;
      }
    }
  `

export default Settings