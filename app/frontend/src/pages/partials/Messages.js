import { useState, useEffect } from "react";

export const Messages = (props) => {
    const [showResults, setShowResults] = useState(false)

    useEffect(()=>{
console.log("messages-")
console.log("messages-")
setShowResults(true)
    },[props.messages])
    return (<>
{showResults ? props.messages.map (( message,i) => (
    <div key={i} className={`alert fade show alert-${message.type}`}>
    {message.text}
   <button type="button" className="close" onClick={()=>setShowResults(false)} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> 
  </div>
)) : null

}
</>
)
    }
