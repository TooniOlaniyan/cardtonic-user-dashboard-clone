import React , {useState , useContext} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, useTheme } from 'styled-components';

function Switch() {
     const theme = useContext(ThemeContext)
    const handleChange = () => {
        theme.setDefaultTheme('dark')
        setIsDarkMode(!isDarkMode)
        if(isDarkMode){
            theme.setDefaultTheme('light')
        }
        
        

    }
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
    <DarkModeToggle onChange={handleChange} checked={isDarkMode} size={70} />
    )
    }

export default Switch