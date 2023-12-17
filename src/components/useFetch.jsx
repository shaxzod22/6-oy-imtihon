
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
const useFetch = (query) => {
    let [data,setData] = useState([])
      useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
              q:query,
              part: 'snippet,id',
              regionCode: 'US',
              maxResults: '20',
              order: 'date'
            },
            headers: {
              'X-RapidAPI-Key': '1deca022c2mshf87e6256ec348dep142c0ejsn9b42a6816157',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
        const getData = async ()=>{
            try {
                const response = await axios.request(options);
                console.log('fetched');
                setData(response.data.items)
            } catch (error) {
                console.error(error);
            }
          }
        getData()
      },[])
      
     
  return data
}


export default useFetch
