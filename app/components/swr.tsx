"use client";
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  // console.log(data)
  return data
}

export function DashboardSWR()
{
    "use client"
  const {data,error} = useSWR('users',fetcher)
  if (error) return 'An error has occured'
  if (!data) return 'Loading'
  console.log(data)
  return (

    <pre>{JSON.stringify(data, null,2)}</pre>
    // <div>
 
    //  <h1>dashboard</h1>
   
    //   <h2> name -{data.id}</h2>
    //   <h2> username -{data.title}</h2>
    // </div>
  )
}
