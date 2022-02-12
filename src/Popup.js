import React from 'react'
import { useQuery } from "react-query";

export default function Popup() {

    const { data, isError,isLoading} = useQuery(
        ["characters", 1],
        async () => {
            let response = await fetch("https://icanhazdadjoke.com/slack")
            return response.json()
        }
    );
    if(!navigator.onLine){
        return <div>Please Go Online</div>
    }
    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        return <div>Server Error Occured!</div>;
      }

  return (
    <div>
       {data.attachments[0].text}
    </div>
  )
}
