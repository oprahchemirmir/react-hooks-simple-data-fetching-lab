// create your App component here

import React,{useEffect,useState} from "react"

function App(){
    const [src,fetchedSrc] = useState("")
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((d) => fetchedSrc(d.message))
    },[]
    )
    
    return(
    src === "" ? <p>Loading...</p> :
     <img src={src} alt="A Random Dog"></img>
        )
}
export default App
