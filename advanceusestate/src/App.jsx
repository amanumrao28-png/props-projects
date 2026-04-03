import React, { useState } from 'react'

const App = () => {
  const [elem, setelem] = useState(0)
  const increby3 = () => {
    setelem(prev => prev + 1);
    setelem(prev =>prev+1);
    setelem(prev => prev+1);

  }
  const decreby3=()=>{
    setelem(prev=>prev-1);
    setelem(prev=>prev-1);
    setelem(prev=>prev-1);
  }
  return (
    <div className='counter'>
      <h1>{elem}</h1>
      <div className='button-row'>
        <button onClick={increby3}>
          3++
        </button>
        <button onClick={decreby3}>3--</button>
      </div>
    </div>
  )
}

export default App