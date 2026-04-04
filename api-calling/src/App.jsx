import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  const getdata=async()=>{
   const response=await axios.get('https://picsum.photos/v2/list')
   setData(response.data)
  }
  return (
    <div>
      <button onClick={getdata}>
        Get Data
      </button>
      <div>
        {data.map(function(elem,idx)
        {
          return<h2>{elem.author}{idx}</h2>

        })}
      </div>
    </div>

    

   
  )
}

export default App