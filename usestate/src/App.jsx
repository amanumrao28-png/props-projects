import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increasenum(){
    setnum(num+1)
  }
  function decreasenum(){
    setnum(num-1)

  }
  function jumpby5(){
    setnum(num+5)
  }
  return (
    <div className='counter'>
      <h1>{num}</h1>
      <button onClick={increasenum}>
        Increase
      </button>
      <button onClick={decreasenum}>
        Decrease
      </button>
      <button onClick={jumpby5}>
        Jump by 5 
      </button>
    </div>
  )
}

export default App