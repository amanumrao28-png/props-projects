import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);
  const submitHandler =(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title, details});
    setTask(copyTask);
    setTitle('');
    setDetails('');
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className='mt-10 w-full max-w-6xl h-screen mx-auto bg-blue-900 p-6 lg:p-10 flex flex-col gap-8 overflow-hidden'>

      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='w-full content-center justify-between flex flex-col items-start shrink-0'>
        <h1 className='text-4xl text-amber-50 text-center font-bold'>Add Notes</h1>
        <input type="text" 
        placeholder='Enter your name' 
        className='border-2 border-gray-300 rounded-md p-2 justify-center mt-4 w-full bg-gray-300 '
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }} />
        <textarea type="text"
        placeholder='Enter your note' 
        className='border-2 border-gray-300 rounded-md p-2 mt-4 w-full bg-gray-300'
        value={details} 
        onChange={(e)=>{
          setDetails(e.target.value);
        }}/>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 active:scale-95 outline-none'>Add Note</button>

      </form>
      <div className='w-full border-t-2 pt-8 flex-1 min-h-0 flex flex-col'>
      <h1 className='text-4xl font-bold text-amber-50'>Recent Notes</h1>
        <div className='flex flex-row flex-wrap gap-4 items-start justify-start mt-6 flex-1 min-h-0 overflow-y-auto overflow-x-hidden pb-2'>
          {task.map(function(items,idx) {
            return(
              <div key={idx} className='border-2 border-gray-300 rounded-md p-4 mt-4 flex flex-col gap-2 bg-gray-300 justify-between items-center relative h-52 w-40'>
                <div>
                <h2 className='leading-tight text-lg font-bold'>{items.title}</h2>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{items.details}</p>
              </div>
              <button className='bg-red-500 text-white px-4 py-2 rounded-md mt-2 active:scale-95 outline-none'
              onClick={()=>{
                deleteNote(idx);
              }}
              >Delete Note</button>
              </div>
            )
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App