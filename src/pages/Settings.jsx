import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'
import ProfileModal from '../settingsModals/ProfileModal'
import Security from '../settingsModals/Security'
import Suggestion from '../settingsModals/Suggestion'
import Support from '../settingsModals/Support'
import { toast } from 'react-toastify'
function Settings() {
  const [changeProfile , setChangeProfile] = useState(false)
  const [security , setSecurity] = useState(false)
  const [suggestion , setSuggestion] = useState(false)
  const [support , setSupport] = useState(false)
  

  const handleClick = () => {
     const data =  navigator.clipboard.writeText('https://cardtonic.com/')
     if(data){
      toast.success('Link copied, Share with friends')
     }
  }
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          {changeProfile && (
            <ProfileModal setChangeProfile={setChangeProfile} />
          )}


          {security && <Security setSecurity={setSecurity} />}


          {suggestion && <Suggestion setSuggestion={setSuggestion} />}

          
          {support && <Support setSupport={setSupport} />}
          <header>
            <p>Settings</p>
          </header>
          <Setting>
            <div
              onClick={() => setChangeProfile(true)}
              className='settingOptions'
            >
              <p>Profile</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div onClick={() => setSecurity(true)} className='settingOptions'>
              <p>Security</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div onClick={() => setSuggestion(true)} className='settingOptions'>
              <p>Suggestion Box</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div onClick={() => setSupport(true)} className='settingOptions'>
              <p>Support</p>
              <MdKeyboardArrowRight className='icons' />
            </div>
            <div onClick={handleClick} className='settingOptions'>
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
  background-color: ${({ theme }) => theme.colors.body};
  transition: all 0.5s;
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
  @media screen and (max-width: 640px) {
    height: 100vh;
    padding: 0;
    align-items: center;
  }
  @media screen and (max-width: 890px) {
    height: 100vh;
  }

  header {
    text-align: end;
    @media screen and (max-width: 640px) {
      text-align: right;
      width: 90%;
    }
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
    transition: all 0.5s;
    @media screen and (max-width: 640px) {
      height: 100vh;
      padding: 4rem;
      align-items: center;
      justify-content: flex-start;
      /* height: fit-content; */
      overflow: hidden;
      width: 90vw;
      gap: 0.8rem;
    }

    .settingOptions {
      display: flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.lightgray};
      width: 70%;
      padding: 1.2rem 2rem;
      justify-content: space-between;
      border-radius: 1.2rem;
      cursor: pointer;
      @media screen and (max-width: 640px) {
        width: 80vw;
      }
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 18px;
        @media screen and (max-width: 640px) {
          font-weight: 900;
          font-size: 17px;
        }
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
      font-size: 12px;
    }
  `

export default Settings