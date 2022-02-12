import React from 'react'
import { useQuery } from "react-query";

export default function Popup() {

    const { data, isError,isLoading} = useQuery(
        ["fact"],
        async () => {
            let response = await fetch("https://htl-project-backend.prathameshdukare.repl.co/random")
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
       {data.facttext}
    </div>
  )
}
