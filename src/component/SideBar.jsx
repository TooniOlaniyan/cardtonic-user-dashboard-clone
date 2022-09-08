import React  , {useState}from 'react'
import styled from 'styled-components'
import desktopLogo from '../asset/images/desktopLogo.svg'
import reward from '../asset/images/reward.svg'
import star from '../asset/images/star.svg'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import { BiStar } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'

function SideBar() {
  const [openReward , setOpenReward] = useState(false)
  const [openStar , setOpenStar] = useState(false)
  const handleClick = () => {
    setOpenReward(true)

  }
  return (
    <Main>
      <div>
        <img src={desktopLogo} alt='' />
      </div>

      <Middle>
        <Reward>
          {openReward && (
            <div className='RewardContainer'>
              <div className='rewardContent'>
                <Button onClick={() => setOpenReward(false)}>
                  <GrFormClose />
                </Button>
                <p className='loyalText'>
                  Our customer loyalty system gives you points as you carry out
                  transaction. You can redeem your points for cash
                </p>
                <div className='line'></div>
                <div className='pointContainer'>
                  <div className='points'>
                    <span>
                      Points Earned: <span className='blue'>0</span>{' '}
                    </span>
                    <span>
                      Points Redeemed: <span className='green'>0</span>{' '}
                    </span>
                    <span>
                      Points Available: <span className='blue1'>0</span>{' '}
                    </span>
                  </div>
                  <div className='pointQuestion'>
                    <p>How many points do you want to redeem?</p>
                  </div>
                </div>
                <div className='starContainer'>
                  <div className='userStar'>
                    <div className='levelContainer'>
                      <span>0</span> <p>User Level</p>
                    </div>
                    <div className='star'>
                      <BiStar
                        size={23}
                        fill={'#aabdcf8f'}
                        className='starIcon'
                      />
                      <BiStar
                        size={23}
                        fill={'#aabdcf8f'}
                        className='starIcon'
                      />
                      <BiStar
                        size={23}
                        fill={'#aabdcf8f'}
                        className='starIcon'
                      />
                      <BiStar
                        size={23}
                        fill={'#aabdcf8f'}
                        className='starIcon'
                      />
                      <BiStar
                        size={23}
                        fill={'#aabdcf8f'}
                        className='starIcon'
                      />
                    </div>
                  </div>
                </div>
                <div className='redeem'>
                  <div className='redeemPoint'>
                    <p>
                      Redeem Available Points <FaArrowRight />
                    </p>
                  </div>
                  <div className='pointFraction'>
                    <span>i</span>
                    <p>You can redeem a fraction of your points or all</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openStar && (
            <div className='starModalContainer'>
              <div className='starContent'>
                <Button onClick={() => setOpenStar(false)}>
                  <GrFormClose />
                </Button>
                <p style={{ color: '#cecece', fontWeight: '700' , fontSize:'15px' }}>You are a</p>
                <p
                  style={{
                    color: '#1b507e',
                    fontSize: '22px',
                    fontWeight: '700',
                  }}
                >
                  Level 0 User
                </p>
                <p style={{ color: '#cecece', fontWeight: '700' }}>
                  Trade up to 200k to become a{' '}
                </p>
                <p
                  style={{
                    color: '#00cede',
                    fontSize: '38px',
                    fontWeight: '700',
                  }}
                >
                  Level 1 User{' '}
                </p>
                <p style={{ color: '#cecece', fontWeight: '700' }}>
                  and start earning rewards{' '}
                </p>
                <div className='starLink'>
                  <a
                    target='_blank'
                    href='https://help.cardtonic.com/en/collections/3409028-user-levels-reward-points'
                  >
                    <p>
                      Learn More <FaArrowRight />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          )}
          <div className='images'>
            <img onClick={handleClick} src={reward} alt='' />
            <img onClick={() => setOpenStar(true)} src={star} alt='' />
          </div>
        </Reward>
        <RewardText>
          <p>Total Points Available</p>
          <span>
            0. <span className='decimal'>00</span>{' '}
          </span>
        </RewardText>
      </Middle>

      <Links>
        <NavLink to='/dashboard'>
          <div className={'links'}>
            <div className='imageContainer'>
              <motion.div transition={{ duration: 1 }} className='image'>
                <svg
                  // xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='26'
                  height='30'
                  viewBox='0 0 26 30'
                  fill='currentcolor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.4167 27.7499C14.4167 28.5333 15.0499 29.1666 15.8333 29.1666H20.0833C21.5864 29.1666 23.0272 28.5702 24.0897 27.5077C25.1522 26.4452 25.75 25.003 25.75 23.4999C25.75 22.6868 25.75 22.0833 25.75 22.0833C25.75 21.3013 25.1153 20.6666 24.3333 20.6666H15.8333C15.0499 20.6666 14.4167 21.3013 14.4167 22.0833V27.7499ZM10.1667 29.1666C10.9487 29.1666 11.5833 28.5333 11.5833 27.7499V13.5833C11.5833 12.8013 10.9487 12.1666 10.1667 12.1666H1.66667C0.88325 12.1666 0.25 12.8013 0.25 13.5833V23.4999C0.25 25.003 0.846413 26.4452 1.90891 27.5077C2.97141 28.5702 4.41358 29.1666 5.91667 29.1666H10.1667ZM22.9167 23.4999H17.25V26.3333H20.0833C20.8342 26.3333 21.5553 26.0357 22.0865 25.5045C22.6178 24.9732 22.9167 24.2522 22.9167 23.4999ZM8.75 26.3333V14.9999H3.08333V23.4999C3.08333 24.2522 3.38083 24.9732 3.9135 25.5045C4.44475 26.0357 5.16442 26.3333 5.91667 26.3333H8.75ZM15.8333 0.833252C15.0499 0.833252 14.4167 1.46792 14.4167 2.24992V16.4166C14.4167 17.2 15.0499 17.8333 15.8333 17.8333H24.3333C25.1153 17.8333 25.75 17.2 25.75 16.4166V6.49992C25.75 4.99825 25.1522 3.55608 24.0897 2.49358C23.0272 1.43108 21.5864 0.833252 20.0833 0.833252H15.8333ZM17.25 3.66659V14.9999H22.9167V6.49992C22.9167 5.74909 22.6178 5.028 22.0865 4.49675C21.5553 3.9655 20.8342 3.66659 20.0833 3.66659H17.25ZM11.5833 2.24992C11.5833 1.46792 10.9487 0.833252 10.1667 0.833252H5.91667C4.41358 0.833252 2.97141 1.43108 1.90891 2.49358C0.846413 3.55608 0.25 4.99825 0.25 6.49992V7.91659C0.25 8.7 0.88325 9.33325 1.66667 9.33325H10.1667C10.9487 9.33325 11.5833 8.7 11.5833 7.91659V2.24992ZM8.75 3.66659H5.91667C5.16442 3.66659 4.44475 3.9655 3.9135 4.49675C3.38083 5.028 3.08333 5.74909 3.08333 6.49992H8.75V3.66659Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </motion.div>
            </div>
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to='/start-trade'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <svg
                  width='30'
                  height='24'
                  viewBox='0 0 30 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M29.1674 6.33315C29.1674 3.20388 26.63 0.666748 23.5005 0.666748C18.7828 0.666748 11.2161 0.666748 6.49988 0.666748C3.37035 0.666748 0.833008 3.20388 0.833008 6.33315V17.666C0.833008 20.7952 3.37035 23.3324 6.49988 23.3324H23.5005C26.63 23.3324 29.1674 20.7952 29.1674 17.666V6.33315ZM26.3339 17.666H3.66645C3.66645 19.2313 4.93441 20.4992 6.49988 20.4992H23.5005C25.0646 20.4992 26.3339 19.2313 26.3339 17.666ZM3.66645 13.4162V14.8328H26.3339V13.4162H3.66645ZM26.3339 10.583V6.33315C26.3339 4.76922 25.0646 3.49995 23.5005 3.49995C18.7828 3.49995 11.2161 3.49995 6.49988 3.49995C4.93441 3.49995 3.66645 4.76922 3.66645 6.33315V10.583H26.3339Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </div>
            </div>
            <p>Start Trade</p>
          </div>
        </NavLink>
        <NavLink to='/transactions'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.9777 22.9631C18.202 21.7561 20.5013 18.6437 20.5013 15C20.5013 12.654 19.5479 10.529 18.0094 8.99048C17.4569 8.43798 17.4569 7.53983 18.0094 6.98733C18.5633 6.43483 19.4601 6.43483 20.014 6.98733C22.0653 9.03866 23.3346 11.872 23.3346 15C23.3346 19.9342 20.1741 24.1361 15.7682 25.6902L17.0588 26.5855C17.7006 27.0317 17.8606 27.9143 17.4144 28.5575C16.9696 29.1992 16.0856 29.3593 15.4438 28.9131L11.1938 25.965C10.5535 25.5216 10.392 24.6432 10.8326 24.0001L13.6659 19.8662C14.1079 19.2202 14.9905 19.0559 15.6351 19.4979C16.2796 19.9399 16.444 20.8225 16.002 21.4671L14.9777 22.9631ZM8.26697 4.29708L6.96505 3.42865C6.3148 2.99515 6.13772 2.11398 6.57122 1.46373C7.00614 0.813482 7.88589 0.637815 8.53614 1.07131L12.7861 3.90465C13.4378 4.33815 13.6135 5.21791 13.18 5.86958L10.3466 10.1196C9.91172 10.7698 9.03197 10.9455 8.38172 10.512C7.73147 10.0785 7.55439 9.19733 7.98789 8.54708L8.98663 7.05108C5.78072 8.26799 3.5013 11.3691 3.5013 15C3.5013 17.346 4.4533 19.4696 5.9918 21.0095C6.5443 21.562 6.5443 22.4587 5.9918 23.0127C5.4393 23.5652 4.54113 23.5652 3.98863 23.0127C1.9373 20.9613 0.667969 18.128 0.667969 15C0.667969 10.053 3.84413 5.84124 8.26697 4.29708Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </div>
            </div>
            <p>Transactions</p>
          </div>
        </NavLink>
        <NavLink to='/wallet'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <svg
                  width='32'
                  height='30'
                  viewBox='0 0 32 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28.7498 13.8439V7.91659C28.7498 7.54086 28.6006 7.18053 28.3349 6.91485C28.0692 6.64917 27.7089 6.49992 27.3332 6.49992H4.6665C4.29078 6.49992 3.93045 6.35066 3.66477 6.08499C3.39909 5.81931 3.24984 5.45898 3.24984 5.08325C3.24984 4.70753 3.39909 4.34719 3.66477 4.08152C3.93045 3.81584 4.29078 3.66659 4.6665 3.66659H27.3332C27.7089 3.66659 28.0692 3.51733 28.3349 3.25165C28.6006 2.98598 28.7498 2.62564 28.7498 2.24992C28.7498 1.8742 28.6006 1.51386 28.3349 1.24818C28.0692 0.982507 27.7089 0.833252 27.3332 0.833252H4.6665C3.53933 0.833252 2.45833 1.28102 1.6613 2.07805C0.86427 2.87508 0.416504 3.95608 0.416504 5.08325V24.9166C0.416504 26.0438 0.86427 27.1248 1.6613 27.9218C2.45833 28.7188 3.53933 29.1666 4.6665 29.1666H27.3332C27.7089 29.1666 28.0692 29.0173 28.3349 28.7517C28.6006 28.486 28.7498 28.1256 28.7498 27.7499V21.8226C29.5779 21.5341 30.2957 20.995 30.8037 20.2802C31.3116 19.5654 31.5845 18.7102 31.5845 17.8333C31.5845 16.9563 31.3116 16.1011 30.8037 15.3863C30.2957 14.6715 29.5779 14.1324 28.7498 13.8439ZM25.9165 26.3333H4.6665C4.29078 26.3333 3.93045 26.184 3.66477 25.9183C3.39909 25.6526 3.24984 25.2923 3.24984 24.9166V9.07259C3.70353 9.24037 4.1828 9.32856 4.6665 9.33325H25.9165V13.5833H21.6665C20.5393 13.5833 19.4583 14.031 18.6613 14.828C17.8643 15.6251 17.4165 16.7061 17.4165 17.8333C17.4165 18.9604 17.8643 20.0414 18.6613 20.8385C19.4583 21.6355 20.5393 22.0833 21.6665 22.0833H25.9165V26.3333ZM27.3332 19.2499H21.6665C21.2908 19.2499 20.9304 19.1007 20.6648 18.835C20.3991 18.5693 20.2498 18.209 20.2498 17.8333C20.2498 17.4575 20.3991 17.0972 20.6648 16.8315C20.9304 16.5658 21.2908 16.4166 21.6665 16.4166H27.3332C27.7089 16.4166 28.0692 16.5658 28.3349 16.8315C28.6006 17.0972 28.7498 17.4575 28.7498 17.8333C28.7498 18.209 28.6006 18.5693 28.3349 18.835C28.0692 19.1007 27.7089 19.2499 27.3332 19.2499Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </div>
            </div>
            <p>Wallet</p>
          </div>
        </NavLink>
        <NavLink to='/calculator'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <svg
                  width='27'
                  height='30'
                  viewBox='0 0 27 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.5 0H25.5C25.8978 0 26.2794 0.158035 26.5607 0.43934C26.842 0.720644 27 1.10218 27 1.5V28.5C27 28.8978 26.842 29.2794 26.5607 29.5607C26.2794 29.842 25.8978 30 25.5 30H1.5C1.10218 30 0.720644 29.842 0.43934 29.5607C0.158035 29.2794 0 28.8978 0 28.5V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0ZM3 3V27H24V3H3ZM6 6H21V12H6V6ZM6 15H9V18H6V15ZM6 21H9V24H6V21ZM12 15H15V18H12V15ZM12 21H15V24H12V21ZM18 15H21V24H18V15Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </div>
            </div>
            <p>Calculator</p>
          </div>
        </NavLink>
        <NavLink to='/settings'>
          <div className='links'>
            <div className='imageContainer'>
              <div className='image'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10.2189 3.45833C11.2247 1.88016 12.9899 0.833252 15.0002 0.833252C17.0104 0.833252 18.7756 1.88016 19.7814 3.45833C21.6075 3.05316 23.5965 3.56175 25.0174 4.98267C26.4383 6.405 26.9469 8.39257 26.5418 10.2201C28.1199 11.2259 29.1668 12.9911 29.1668 14.9999C29.1668 17.0102 28.1199 18.7753 26.5418 19.7812C26.9469 21.6087 26.4383 23.5963 25.0174 25.0172C23.5965 26.4395 21.6075 26.9467 19.7814 26.5429C18.7756 28.1211 17.0104 29.1666 15.0002 29.1666C12.9899 29.1666 11.2247 28.1211 10.2189 26.5429C8.39141 26.9467 6.40383 26.4395 4.98291 25.0172C3.562 23.5963 3.05342 21.6087 3.45717 19.7812C1.88042 18.7753 0.833496 17.0102 0.833496 14.9999C0.833496 12.9911 1.88042 11.2259 3.45717 10.2201C3.05342 8.39257 3.562 6.405 4.98291 4.98267C6.40383 3.56175 8.39141 3.05316 10.2189 3.45833ZM10.294 6.47441C10.6652 6.66708 11.1029 6.68549 11.4897 6.5254C11.8764 6.36532 12.1725 6.04233 12.2986 5.64425C12.6613 4.49816 13.7337 3.66659 15.0002 3.66659C16.2667 3.66659 17.3391 4.49816 17.7018 5.64425C17.8278 6.04233 18.1239 6.36532 18.5107 6.5254C18.8974 6.68549 19.3337 6.66708 19.7049 6.47441C20.7731 5.92049 22.1189 6.09049 23.0143 6.98724C23.9096 7.88258 24.081 9.22842 23.5271 10.2952C23.3344 10.6663 23.3146 11.1041 23.4747 11.4894C23.6348 11.8762 23.9578 12.1723 24.3558 12.2983C25.5033 12.661 26.3335 13.7334 26.3335 14.9999C26.3335 16.2664 25.5033 17.3402 24.3558 17.7029C23.9578 17.829 23.6348 18.1251 23.4747 18.5104C23.3146 18.8972 23.3344 19.3349 23.5271 19.7061C24.081 20.7728 23.9096 22.1187 23.0143 23.014C22.1189 23.9093 20.7731 24.0807 19.7049 23.5268C19.3337 23.3342 18.8974 23.3158 18.5107 23.4758C18.1239 23.6359 17.8278 23.9589 17.7018 24.357C17.3391 25.5031 16.2667 26.3333 15.0002 26.3333C13.7337 26.3333 12.6613 25.5031 12.2986 24.357C12.1725 23.9589 11.8764 23.6359 11.4897 23.4758C11.1029 23.3158 10.6652 23.3342 10.294 23.5268C9.22726 24.0807 7.88142 23.9093 6.98608 23.014C6.09075 22.1187 5.91933 20.7728 6.47325 19.7061C6.66592 19.3349 6.68434 18.8972 6.52567 18.5104C6.36559 18.1251 6.04259 17.829 5.64309 17.7029C4.497 17.3402 3.66683 16.2664 3.66683 14.9999C3.66683 13.7334 4.497 12.661 5.64309 12.2983C6.04259 12.1723 6.36559 11.8762 6.52567 11.4894C6.68434 11.1041 6.66592 10.6663 6.47325 10.2952C5.91933 9.22842 6.09075 7.88258 6.98608 6.98724C7.88142 6.09049 9.22726 5.92049 10.294 6.47441ZM15.0002 9.33325C11.8722 9.33325 9.3335 11.8733 9.3335 14.9999C9.3335 18.1279 11.8722 20.6666 15.0002 20.6666C18.1282 20.6666 20.6668 18.1279 20.6668 14.9999C20.6668 11.8733 18.1282 9.33325 15.0002 9.33325ZM15.0002 12.1666C16.5642 12.1666 17.8335 13.4373 17.8335 14.9999C17.8335 16.5639 16.5642 17.8333 15.0002 17.8333C13.4362 17.8333 12.1668 16.5639 12.1668 14.9999C12.1668 13.4373 13.4362 12.1666 15.0002 12.1666Z'
                    fill='currentcolor'
                  ></path>
                </svg>
              </div>
            </div>
            <p>Settings</p>
          </div>
        </NavLink>
      </Links>
    </Main>
  )
}

const Main = styled.div`
background-color: ${({theme}) => theme.colors.white};
height: 100vh;
gap: 2rem;
padding: 3rem 0;
display: flex;
flex-direction: column;
align-items: center;
flex: 1.13;
    
`
const Links = styled.div`
  width: 100%;

  a.active {
    p {
      color: ${({ theme }) => theme.colors.textcolor};
      
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;

      .image {
        width: 45%;
        height: 105%;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.lightblue1};

        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 17px 20px 0 rgb(27 50 60 / 16%);
        svg {
          color: #fff;
        }
      }
    }
  }
  .links {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 4.5rem;
    width: 100%;

    .imageContainer {
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 700;
      text-align: start;
      flex: 1;
      width: max-content;
    }
  }

  a {
    text-decoration: none;
    transition: all 1s;
  }
`

const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    padding: 0.8rem;
    gap: 1rem;
    background-color: ${({theme})=> theme.colors.lightblue2};
    img{
      cursor: pointer;
    }

   
    
`
const RewardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  align-items: flex-end;
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textcolor};
  }
  span {
    color: ${({ theme }) => theme.colors.lightblue1};
    font-size: 20px;
    font-weight: 900;
  }
  .decimal {
    color: ${({ theme }) => theme.colors.lightblue};
    font-size: 17px;
    font-weight: 900;
  }
`
const Button = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.textcolor};
  padding: 0.25rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Reward = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }

  .starModalContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    .starContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 1.6rem;
      padding: 5rem 3rem;
      gap: 1rem;
      position: relative;
      margin-top: -10rem;
      width: 50vw;
      .starLink {
        a{
          text-decoration: none;
        }
        cursor: pointer;
        p {
          background-color: ${({ theme }) => theme.colors.black};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 1rem 3rem;
          border-radius: 1rem;
          color: ${({ theme }) => theme.colors.lightblue1};
        }
      }
    }
  }
  .RewardContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    

    .rewardContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 1.6rem;
      padding: 5rem 3rem;
      gap: 1rem;
      position: relative;
      margin-top: -4rem;
      .loyalText {
        font-size: 13.5px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textcolor};
        margin-bottom: 0.3rem;
      }
      .redeem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;
        .pointFraction {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          background-color: ${({ theme }) => theme.colors.lightgray};
          padding: 1rem 3rem;
          border-radius: 1rem;
          p {
            font-size: 13px;
            color: ${({ theme }) => theme.colors.textcolor};
          }
          span {
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.1rem;
            font-size: 10px;
            background-color: #aabdcf;
          }
        }
        .redeemPoint {
          cursor: pointer;
          p {
            background-color: ${({ theme }) => theme.colors.green};
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 1.2rem 1rem;
            border-radius: 1rem;
            color: ${({ theme }) => theme.colors.textcolor};
          }
        }
      }
      .line {
        width: 98%;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.lightblue1};
        opacity: 0.3;
      }
      .pointContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 0.5rem;

        .points {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 0.2rem;
          flex-direction: column;
          span {
            color: ${({ theme }) => theme.colors.darkblue};
          }
          .blue {
            color: ${({ theme }) => theme.colors.textcolor};
            font-weight: 700;
          }
          .green {
            color: ${({ theme }) => theme.colors.green};
            font-weight: 700;
          }
          .blue1 {
            color: ${({ theme }) => theme.colors.lightblue1};
            font-weight: 700;
          }
        }
        .pointQuestion {
          display: flex;
          padding: 1.3rem 6rem;
          justify-content: center;
          border: 1px solid ${({ theme }) => theme.colors.green};
          border-radius: 20px;
          p {
            color: ${({ theme }) => theme.colors.textcolor};
            font-weight: 700;
            font-size: 14px;
          }
        }
      }
      .starContainer {
        display: flex;
        /* width: 100%; */
        background-color: #eef6fe;
        padding: 0.4rem 0.5rem;
        border-radius: 2rem;
        justify-content: space-between;
        align-items: center;
        align-self: flex-end;
        margin-top: -0.6rem;

        .userStar {
          display: flex;
          justify-content: center;
          align-items: center;
          justify-self: flex-end;
          gap: 2rem;
          .levelContainer {
            justify-content: center;
            align-items: center;
            display: flex;
            gap: 0.8rem;
            p {
              font-weight: 700;
              font-size: 15px;
            }
          }
          span {
            background-color: #e1f2ff;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-weight: 900;
          }
          .star {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`

export default SideBar