import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        setErrorMessage('');
        try {
       setLoading(true);
       const response = await yelp.get('/search', {
           params: {
               limit: 50,
               term: searchTerm ,
               location: 'San Jose'
           }
       });
       setResults(response.data.businesses);
       setLoading(false);
    }catch (err){
       setErrorMessage('Something went wrong');
    }
    }

    useEffect(() => {
       searchApi('indian')
    }, [])

    return [searchApi, results, errorMessage, loading]

}