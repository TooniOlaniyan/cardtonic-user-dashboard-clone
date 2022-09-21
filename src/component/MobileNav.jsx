import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import reward from '../asset/images/reward.svg'
import star from '../asset/images/star.svg'
import logOut from '../asset/images/logOut.svg'
import { motion, AnimatePresence } from 'framer-motion'

function MobileNav({isOpened}) {
        const menuVarient = {
        initial:{
            x: -400
        },
        final:{
            x:-200,
            X:50,
            x:0
        },
        exit:{
            x: 0,
            x: 50,
            x: -200
        }
        
    }
     const boxVarient = {
       open: {
         scale: 0,
         scale: 100,
       },
       close: {
         scale: 100,
         scale: 0,
       },
     }
     
  return (
    <Container>
      {isOpened ? (
        <motion.div
          variants={boxVarient}
          animate='open'
          className='bgContainer'
        ></motion.div>
      ) : (
        <motion.div
          variants={boxVarient}
          animate='close'
          className='bgContainer'
        ></motion.div>
      )}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            variants={menuVarient}
            initial='initial'
            animate='final'
            exit={{ x: [0, -130, 1000] }}
            className='links'
          >
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/start-trade'>Start Trade</Link>
            <Link to='/transactions'>Transaction</Link>
            <Link to='/wallet'>Wallet</Link>
            <Link to='/calculator'>Calculator</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/dashboard'>Support</Link>
            <div className='clicks'>
              <div className='icon'>
                <img src={star} alt='' />
                <img src={reward} alt='' />
              </div>
              <img className='icons' src={logOut} alt='' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */
  padding: 0 5.5rem;
  width: 100vw;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  gap: 2rem;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }
  .bgContainer {
    display: block;
    height: 30px;
    width: 30px;
    position: fixed;
    top: 45px;
    right: 25px;
    background: #000;
    border-radius: 50%;
    z-index: 0;
    transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    z-index: 3;
    margin-top: 50%;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    width: 100%;
    .clicks {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      .icon {
        display: flex;
        gap: 0.3rem;
        img {
          width: 40px;
        }
      }

      .icons {
        width: 90px;
      }
    }
  }
`

export default MobileNav