
import axios from "axios"
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { InputContext } from "../App";
const useFetch = (query) => {
  const {search} = useContext(InputContext)
    let [data,setData] = useState([])
      useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
              q:search?search:query,
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
      },[search,query])
      
     
  return data
}


export default useFetch
