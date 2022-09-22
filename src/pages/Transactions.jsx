import React from 'react'
import styled from 'styled-components'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import Table from '../shared/Table'
import successful from '../asset/images/successful.svg'
import failed from '../asset/images/failed.svg'
import pending from '../asset/images/pending.svg'
import MobileTable from '../shared/MobileTable'
function Transactions() {
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <div className='top'>
            <div className='cardOne'>
              <div>
                <img src={successful} alt='' />
                <p>Successful</p>
              </div>
              <p>5</p>
            </div>
            <div className='cardTwo'>
              <div>
                <img src={failed} alt='' />
                <p>Failed</p>
              </div>
              <p>2</p>
            </div>
            <div className='cardThree'>
              <div>
                <img src={pending} alt='' />
                <p>Pending</p>
              </div>
              <p>0</p>
            </div>
            <div className='gift'>
              <p>Gift Card </p>
              <span>History</span>
            </div>
          </div>

          <ButtomTable>
            <Table />
            <MobileTable/>

          </ButtomTable>
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
  }
  .top {
    display: flex;
    align-items: flex-end;
    gap: 0.7rem;
    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
      align-items: center;
    }
    .cardOne,
    .cardTwo,
    .cardThree {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 24%;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 1.7rem 0rem;
      border-radius: 1.5rem;
      transition: all 0.5s;
      @media screen and (max-width: 640px) {
        padding: 1rem 0;
        width: 90vw;
      }
      p {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.textcolor};
        font-size: 30px;
        @media screen and (max-width: 640px) {
          font-size: 20px;
        }
      }
      div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.6rem;
        @media screen and (max-width: 640px) {
          flex-direction: row;
          align-items: center;
        }
        img {
          @media screen and (max-width: 640px) {
            width: 30px;
          }
        }
        p {
          font-weight: 500;
          font-size: 15px;
          color: ${({ theme }) => theme.colors.gray};
          @media screen and (max-width: 640px) {
            font-size: 14px;
          }
        }
      }
    }
    .gift {
      text-align: end;
      display: flex;
      font-weight: 900;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.textcolor};
      justify-self: right;
      margin-left: 6rem;
      align-self: center;
      @media screen and (max-width: 640px) {
        font-size: 20px;
        text-align: end;
        margin-right: 1rem;
        align-self: flex-end;
      }

      span {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`
const ButtomTable = styled.div`
  
`

export default Transactions