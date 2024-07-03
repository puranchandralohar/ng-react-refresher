import Ziva from "./Ziva";

function Sakshi(props) {

    console.log(props, "Sakshi");
    return (
        <Ziva {...props} />
    )
}

export default Sakshi;