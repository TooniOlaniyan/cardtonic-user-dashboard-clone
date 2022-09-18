import React , {useState , useContext} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from 'styled-components'

function Switch() {
    const themeContext = useContext(ThemeContext)
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={70} />
    )
    }

export default Switch