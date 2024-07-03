import { FaBeer } from "react-icons/fa";
import { Bs9CircleFill } from "react-icons/bs";


function Batsman(props) {

    console.log(props, "Batsman");
  return (
    <div>
      <h1>{props.name}</h1>
      <FaBeer />
      <Bs9CircleFill />
      <h1>{props.city}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}

export default Batsman;
