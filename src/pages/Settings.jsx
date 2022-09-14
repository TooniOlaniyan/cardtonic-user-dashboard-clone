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
          <header>
            <p>Settings</p>
          </header>
          <Setting>
            <div className='settingOptions'>
              <p>Profile</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div className='settingOptions'>
              <p>Security</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div className='settingOptions'>
              <p>Suggestion Box</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div className='settingOptions'>
              <p>Support</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div className='settingOptions'>
              <p>Share With Friends</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
          </Setting>
          <ExternalLinks>
            <p>
              <a href='https://cardtonic.com/rate-calculator' target='_blank'>
                Rate Calculator
              </a>
              |{' '}
              <a href='https://cardtonic.com/contact-us' target='_blank'>
                Contact Us
              </a>
            </p>
          </ExternalLinks>
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
  const Setting = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 4rem;
    height: 100vh;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    flex-direction: column;

    .settingOptions {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.lightgray};
      width: 70%;
      padding: 1.2rem 2.5rem;
      justify-content: space-between;
      border-radius: 1.5rem;
      cursor: pointer;
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 17px;
      }
      .icons {
        color: ${({ theme }) => theme.colors.lightblue1};
        font-size: 20px;
        border: 2px solid ${({ theme }) => theme.colors.lightblue1};
        border-radius: 0.5rem;
      }
    }
  `
  const ExternalLinks = styled.div`
    text-align: right;
    margin-top: 1rem;
    padding: 1rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.graytext};
      margin-right: 0.3rem;
    }
    p {
      color: ${({ theme }) => theme.colors.graytext};
      font-weight: 900;
      font-size: 13px;
    }
  `

export default Settings