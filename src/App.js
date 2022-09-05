import React from 'react';
import {theme} from './component/styles/theme'
import {ThemeProvider} from 'styled-components'
import SignIn from './pages/SignIn';
import Register from './pages/Register';
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
          </Routes>
        </Router>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
