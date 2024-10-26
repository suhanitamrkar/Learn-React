import React from 'react'

function Item({name,isPacked}){
return (
    // <li>{isPacked ? (<del>{name + ' ✅'} </del>   ): (name)} </li>
    <li>{name} {isPacked && ' ✅'} </li>
)
 
    // if (isPacked) {
    //     return <li className='item'>{name} </li>        
    //         }
}

const Navbar = () => {
   
  return (
    <div>
<h1>Sally Ride's Packing List</h1>
<ul>
    
    <Item isPacked={true} name="space suit" />
    <Item isPacked={true} name="Helmet with a golden leaf" />
    <Item isPacked={false} name="Photo of tam" />

</ul>
    </div>
  )
}

export default Navbar