import React ,{createContext,useContext}  from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},

}) //yahan default object de rahe unlike last time

export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
return useContext(ThemeContext)
//isse ek baar me har jagah import ho jayega unlike last time
}