import React , {useState} from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

function Switch() {
const [isDarkMode, setIsDarkMode] = useState(() => false)
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={70} />
  )
}

export default Switch