import {useState, useEffect} from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://ticket-booking-app-backend.onrender.com/api/v1/booking';


const useFetch = (req) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetchData(`${API_ENDPOINT}`);
    }, [req]);

    const fetchData = async (url) => {
        const response = await axios.get(url);
        const response1 = await response.data;
        setData(response1.data);
        setIsloading(false)
       
    };
    //console.log(data)

    return {data, isLoading, setData};

}

export default useFetch;