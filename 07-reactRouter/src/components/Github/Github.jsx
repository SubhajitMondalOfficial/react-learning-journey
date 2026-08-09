import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()

    
    // *****************Old style**************
    
    // const [data, setData] = useState({})
    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( res => res.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data) 
    //     })
    // }, [])



  return (
    <div className='flex flex-col items-center gap-6 text-center m-10  p-4  text-black text-3xl'>
        <h1 className='bg-gray-400 p-6'>Github Followers : {data.followers}</h1>

    <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}