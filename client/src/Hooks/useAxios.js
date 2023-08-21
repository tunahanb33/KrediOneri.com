import axios from "axios";
import { useState, useEffect } from "react";
const useAxios = (config) => {
    const [results, setResults] = useState([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.request(config);
            setResults(data);
            setIsLoading(false);
        } catch (error) {
            setErrors(error);
        } finally {
        };
    };

    useEffect(() => {
        fetchData()
    }, [config.url]);

    return [results, errors, isLoading];
};


export default useAxios;