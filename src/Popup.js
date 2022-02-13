import React from 'react'
import { useQuery } from "react-query";
import img from './icon.png'

export default function Popup() {

    const { data, isError,isLoading} = useQuery(
        ["fact"],
        async () => {
            let response = await fetch("https://htl-project-backend.prathameshdukare.repl.co/random")
            return response.json()
        }
    );
    if(!navigator.onLine){
        return <div className='popup-section'>
        <div className="hero">
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
        </div>
           <p className="fact-text">
             Go Online to see the fact
           </p>
        </div>
    }
    if (isLoading) {
        return <div className='popup-section'>
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
           <p className="fact-text">
             loading...
           </p>
        </div>
    }
    if (isError) {
        return <div className='popup-section'>
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
           <p className="fact-text">
             Unable to Fetch!
           </p>
        </div>
      }

  return (
    <div className='popup-section'>
    <img className='img' src={img} alt="Eye" />
    <h1>Eye Fact</h1>
       <p className="fact-text">
         {data.facttext}
       </p>
    </div>
  )
}
