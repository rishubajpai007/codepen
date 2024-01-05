import { createContext, useState } from 'react';
import useLocalStorage from '../useLocalStorage';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useLocalStorage('html','');
    const [js, setJs] = useLocalStorage('js','');
    const [css, setCss] = useLocalStorage('css','');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
