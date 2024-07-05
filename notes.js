// Props - 

// Props are used to pass the data from parent component to child component
// Props are immutable i.e. they cannot be changed in the child component
// Props are passed as attributes to the child component.
// Props are used to render the data in the child component.

{/* <input type="text" placeholder="First Name"/> */}
{/* <Footer name="Footer"/> */}

// function sum(a,b=6){  //child
//   return a,b;
// }

// sum(2,3)  // executing the function  // parent

// function Header(props){  //child
//   return (
//     <header>
//       <h1>{props}</h1>
//     </header>
//   );
// }

// <Header name="Header"/>  //rendering the component

// Props Drilling - Passing the props from parent to child to grandchild and so on.

// State - State is used to store the data in the component. 
// It is mutable i.e. it can be changed in the component.



// Hooks - Hooks are some functions which are used to add the state and lifecycle methods in the functional components.

// useState - we can cretae, update a state variable
// useEffect - we can perform the actions at the time of the component creation,
//  updation and deletion.


// Virtual DOM - 
// Virtual DOM is the copy of the actual DOM. 
// It is used to perform the actions on the actual DOM without affecting 
// the actual DOM.

//Lifecycle methods - These are the methods which are used to perform the actions at the time of the component creation, updation and deletion.

// Mounting - Component is created and render on the screen or added to the dom.
// Updating - Component is updated and re-rendered on the screen.
// Unmounting - Component is removed from the screen or deleted from the dom.

//componentDidMount - initial rendering
//componentDidUpdate -updated
//componentWillUnmount - removed