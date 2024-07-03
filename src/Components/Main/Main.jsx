import Mahi from "./Batsman.jsx";
import { FaBeer } from "react-icons/fa";


export function Main(props) {

    console.log(props.caption, "Main");


    if(props.caption === "true"){
        return <Mahi {...props}/>
    }
    else{
        return <h1>he is retired</h1>
    }
}