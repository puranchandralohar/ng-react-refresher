// import React from "react";

// import  Foo  from "./Components/Footer/Footer.jsx"
// import {  Header } from "./Components/Header/Header.jsx"
// import { Main } from "./Components/Main/Main.jsx";
// import Mahi from "./Components/Mahi.jsx";
// import Day from "./Components/Day.jsx";
// import Night from "./Components/Night.jsx";
// import { List } from "./List.jsx";
import State from "./State.jsx";

// import "./App.css";

// Pakagaes
// local Compnents
// css files

function App() {

  let data = {
    name:"mahima",
    age: 20,
  }
  // let isDay = true;

  // if(isDay){
  //   return <Day />
  // }
  // else{
  //   return <Night />
  // }

  return (
    <>
      <State name={data}/>
      {/* <List />
       */}
      {/* {
      isDay ? <Day /> : <Night />
    } */}
      {/* <Mahi wife="Sakshi" children="1" daughter="Ziva"/> */}
      {/* <Header />
     <Main name="Mahi" age="40" city="Ranchi" daughter="Ziva" caption="true"/>
     <Foo /> */}
    </>
  );
}

export default App;
