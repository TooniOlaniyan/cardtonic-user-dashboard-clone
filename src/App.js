import React from 'react';
import {theme} from './component/styles/theme'
import {ThemeProvider} from 'styled-components'
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



function App() {
  return (
    <div className="App">
      <Globalstyles/>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<DashboardHome/>}/>
            <Route path='/start-trade' element={<StartTrade/>}/>
            <Route path='/transactions' element={<Transactions/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
