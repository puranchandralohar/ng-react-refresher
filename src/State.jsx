import { useState } from "react";

export default function State(props) {
 
    let [value, setValue] = useState(0)


    function handleClick(){
    //    value = value+1
       setValue(value +1)
       console.log(value)
    }

   return(
    <>
       <h1>Count : {value}</h1>
       <button onClick={handleClick}>increment</button>
    </>
 
   )
}
