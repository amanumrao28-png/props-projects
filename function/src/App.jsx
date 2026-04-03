import React from 'react'

const App = () => {
  return (

    <div>
      <button onClick={(elem) => console.log(elem.pageX)} className='button'>Click Me</button>
    </div>
  )
}

export default App