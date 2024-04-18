import axios from 'axios'
import  { useEffect, useState } from 'react'

const useAxiosFetch = (dataUrl) => {

  const [data,setData]=useState([])
  const [fetchError,SetFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    let isMounted =true;
    const source = axios.CancelToken.source();

    const FetchData = async(url)=>{
       setIsLoading(true);
       try{

        const response =await axios.get(url,{
          cancelToken:source.token
        })
        if(isMounted){
          setData(response.data)
          SetFetchError(null)
        }

       }catch(err){
         if(isMounted){
          SetFetchError(err.message)
          setData([])
         }
       }finally{
         isMounted && setTimeout(()=> setIsLoading(false),2000)
       }
    }
    FetchData(dataUrl)
    const cleanup =()=>{
      isMounted=false
      source.cancel();
    }
    return cleanup;
  },[dataUrl])
  return { data , fetchError,isLoading}
}

export default useAxiosFetch