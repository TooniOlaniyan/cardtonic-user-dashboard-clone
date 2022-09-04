import React from 'react';
import {theme} from './component/styles/theme'
import {ThemeProvider} from 'styled-components'
import SignIn from './pages/SignIn';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SignIn/>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
