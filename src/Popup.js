import React from 'react'
import { useQuery } from "react-query";
import img from './icon.png'
import loading from './loading.gif'

export default function Popup() {
  const { data, isError, isLoading } = useQuery(
    ["fact"],
    async () => {
      let response = await fetch("https://htl-project-backend.prathameshdukare.repl.co/random")
      let json = await response.json();
      localStorage.setItem("cachedFact", json.facttext)
      return json
    }
  );
  if (!navigator.onLine) {
    return <div className='popup-section'>
      <div className="hero">
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
      </div>
      <p className="fact-text">
        {localStorage.getItem("cachedFact")}
      </p>
      <p>[ Go Online to see new fact! ]</p>
    </div>
  }
  if (isLoading) {
    return <div className='popup-section'>
      <img className='img' src={img} alt="Eye" />
      <h1>Eye Fact</h1>
      <p className="fact-text">
      <img className='loading' src={loading} alt="Loading" />
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
