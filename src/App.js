import React, { useState } from 'react';
import {theme , darkTheme} from './component/styles/theme'
import {ThemeContext, ThemeProvider} from 'styled-components'
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import StartTrade from './pages/StartTrade';
import Transactions from './pages/Transactions'
import Wallet from './pages/Wallet'
import Calculator from './pages/Calculator'
import Settings from './pages/Settings'
import DashboardHome from './pages/DashboardHome';
import Globalstyles from './component/styles/globalStyles';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
  const [defaultTheme , setDefaultTheme] = useState('light')
  const isDark = defaultTheme=== 'dark'
  
  return (
    <div className='App'>
      <Globalstyles />
      <ToastContainer />
      <ThemeContext.Provider value={{defaultTheme , setDefaultTheme}}>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
          <Router>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<DashboardHome />} />
              <Route path='/start-trade' element={<StartTrade />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/wallet' element={<Wallet />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Router>
      </ThemeProvider>
        </ThemeContext.Provider>
    </div>
  )
}

export default App;
