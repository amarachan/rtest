// Functional component or stateless component without hooks


import React from 'react'

// function Greet() {
//     return <h1>Hello CVGA</h1>
// }
// export const Greet = () => <h1>Hello CVGA</h1> // using arrow functions
// above is named export
//below deault export if we change the name in app js it won't effect output
// const Greet = () => <h1>Hello CVGA </h1> //using arrow functions
const Greet = (props) =>{
    console.log(props);
return <h1>Hello CVGA, {props.name} a.k.a {props.codeName}</h1>
}
export default Greet
