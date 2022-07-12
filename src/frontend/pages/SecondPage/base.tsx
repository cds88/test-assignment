import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";


import axios from 'axios'

import { useHead } from "../../../backend/hooks/useHead";
import { withProceed } from "../FirstPage/base";
import { Spinner, Flex } from "@chakra-ui/react";
import { useFetch } from "../../../backend/hooks/useFetch";
import Content  from './Content'



const get_url =page=>`https://rebrickable.com/api/v3/lego/minifigs/`

const sleep = ms => new Promise((Resolve, Reject) => setTimeout(() => Resolve(), ms));


const getRandom =(arr)=>arr[Math.floor(Math.random()*arr.length)];

const getIndexes=(input)=>{
  let results = []
  while(results.length<3)
  {
    let result = getRandom(input)
    if( !(result in results)){
      results.push(result)
    }
  }

  return results
}

const getRandoms=(legofigs)=> getIndexes(legofigs.map((x,index)=> index)).map(index=>legofigs[index])

const makeRequest=async (
    setState
     )=>{
  try{

    await sleep(3000)
    const {data: {results, next}} = await axios({
      method:'GET',
      headers:{
        Authorization: `key ${import.meta.env.VITE_API_KEY}`
      },
      url: get_url(1)
    })

    
    
    setState(state=>({
      ...state,
 
      randoms: getRandoms(results),
 
      loading: false
    }))
 


  }
  catch(error){

  }
}


export default function SecondPage(Props) {
  
  const {state, setState} = Props
  const {loading}  = state
  useHead('Choose minifig !')
  useFetch( ()=> makeRequest(setState))


  

  return (
    <React.Suspense fallback={<div className="flex justify-center items-center h-screen flex-1 text-white"><Spinner/>LOADING !!! </div>}>
      <Content {...Props}   />
    </React.Suspense>

  );
}
