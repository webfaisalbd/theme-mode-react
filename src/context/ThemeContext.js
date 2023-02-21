import React, { useState } from 'react'

export const ChooseTheme = React.createContext();

const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light');
    return (
        <ChooseTheme.Provider value={{ theme, setTheme }}>
            {props.children}
        </ChooseTheme.Provider>
    )
}
export default ThemeContext