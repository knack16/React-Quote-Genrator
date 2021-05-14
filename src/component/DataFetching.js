import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'

const DataFetching = () => {
    const [qoutes,setQuotes]=useState("")

    const getQuote=()=>{
        fetch(" https://type.fit/api/quotes")
         .then((res)=>res.json())
         .then((data)=>{
             let randomNum=Math.floor(Math.random()*data.length)
             setQuotes(data[randomNum]) 
         })
    }
    useEffect(()=>{
        getQuote()
    },[])

    
    return (
        <div>
            <h1>Random Quote Genrator</h1>
            <div className="quote">
                <p>{qoutes.text}</p>
                <p>{qoutes.author}</p>
                <button class="btn" onClick={getQuote}>Get Quote</button>
            </div>
        </div>
    )
}

export default DataFetching


