import React , {useState , useContext , useEffect} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, useTheme } from 'styled-components';

function Switch() {
     const theme = useContext(ThemeContext)
    const handleChange = () => {
        theme.setDefaultTheme('dark')
        setIsDarkMode(true)
        if(theme.isDark){
            theme.setDefaultTheme('light')
            setIsDarkMode(false)
        }
     
       
        
        

    }
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
    <DarkModeToggle onChange={handleChange} checked={theme.isDark} size={70} />
    )
    }

export default Switch