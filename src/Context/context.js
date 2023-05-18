import {useState,createContext, useContext} from 'react';
import useFetch from '../API/useFetch';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const {data, isLoading, setData} = useFetch('get');
    //console.log(data);

    return (
        <AppContext.Provider value={ {data, query, setQuery, isLoading, setData} } >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => useContext(AppContext);
export {AppProvider};