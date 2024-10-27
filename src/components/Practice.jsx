import React, { useState } from "react";

const Practice = () => {
  const [color, setColor] = useState("red");
const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
})
const updateColor =() =>{
    setCar(previousState =>{
        return {...previousState,color:'blue'}
    })
}
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");
  return (
    <div>
      <h1> my favorite color is {color}! </h1>
      <button type="button" onClick={updateColor}>Blue</button>
      <button type="button" onClick={()=> setColor('red')}>Red</button>
      <button type="button" onClick={()=> setColor('pink')}>Pink</button>
      <button type="button" onClick={()=> setColor('green')}>Green</button>
      <h1> My {car.brand} </h1>
      <p>It is a {color} {car.model} from {car.year} </p>
      
    </div>
  );
};

export default Practice;
