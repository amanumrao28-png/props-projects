import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form submitted",text);
    setText('');
  }
  return (
    <div>
      <form className='flex flex-col items-center justify-center h-screen'onSubmit={(e)=>{
        submitHandler(e);
              }}>
        <input type="text" placeholder='Enter your name' value={text} 
          onChange={(e)=>{
            setText(e.target.value);
          }}
        className='border-2 border-gray-300 rounded-md p-2' />
        <button className='p-2 m-10  border-gray-900  bg-blue-500 text-white rounded-md '>Submit</button>
      </form>
    </div>
  )
}

export default App