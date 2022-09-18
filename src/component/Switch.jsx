import React , {useState , useContext} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from 'styled-components';

function Switch({ToggleTheme}) {
    const handleChange = () => {
        setIsDarkMode(!isDarkMode)
        
        

    }
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
    <DarkModeToggle onChange={handleChange} checked={isDarkMode} size={70} />
    )
    }

export default Switch