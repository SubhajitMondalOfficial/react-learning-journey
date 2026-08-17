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
    <div className="text-center p-10">
      <div className="max-w-sm mx-auto p-6 rounded-xl shadow-lg bg-white">
        <img
          className="w-40 h-40 mx-auto rounded-full"
          src={data.avatar_url}
          alt="GitHub Profile"
        />

        <h1 className="text-2xl font-bold mt-4">{data.name}</h1>

        <p className="text-gray-500">@{data.login}</p>

        <p className="mt-3">{data.bio}</p>

        <div className="flex justify-around mt-6">
          <div>
            <p className="font-bold">{data.followers}</p>
            <p>Followers</p>
          </div>

          <div>
            <p className="font-bold">{data.following}</p>
            <p>Following</p>
          </div>

          <div>
            <p className="font-bold">{data.public_repos}</p>
            <p>Repos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}