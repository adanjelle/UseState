import React, { useState } from 'react'
function Reducer() {
  const[count, setCount]= useState(1)
  const[adder, setAdder] =useState(90)
  function increment(){
setCount((prevCount)=> prevCount + 2);
  }
 function decrement(){
     setAdder((PreCount)=>PreCount - 40);
  }
  return (
    <div>
      <p> rahma💛{count}</p>
      <p> adesh: {adder}</p>
      <button onClick={increment}>button</button>
      < button onClick={decrement}> button2</button>
    </div>
  )
}

export default Reducer