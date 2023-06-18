import  {useState,useEffect} from 'react';
import axios from "axios";

function useFetch(url:any){

    const[error,setError] = useState(String);
    const[data, setData] = useState([]);
    const[loading, setLoading]= useState(true);
    
    const fetchData= async() => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (err:any) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData();
    },[url]);

    return{error,loading,data};
} 

export default useFetch;