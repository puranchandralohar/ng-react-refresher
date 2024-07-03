import Sakshi from "./Sakshi";

function Mahi(props){

    console.log(props, "Mahi");
    

    return(
        <div>
            <h1>Name : Mahendra Singh Dhoni</h1>
            <Sakshi {...props}/>                   
        </div>
    )
}

export default Mahi;


