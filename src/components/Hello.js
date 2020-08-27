// simple functional component

import React from 'react'

const Hello = (props) => {
    return (
        <div class='dummyClass'>{/* jsx method is simple and elegant and readable*/}
            <h1>Hello CVG a.k.a {props.codeName}</h1> 
        </div>
    )

    // return React.createElement('div',
    //                 {id:'hello', class:'dummyClass'},  // key value or html id or html class for css
    //                 React.createElement('h1',null,'Hello CVG'))
}

export default Hello