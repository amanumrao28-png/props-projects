import React from 'react'
const App=()=>{

const user={
  name:'aman',
  age:23,
  city:'fatehpur'
}
localStorage.setItem('user',JSON.stringify(user))
const users=JSON.parse(localStorage.getItem('user'))
console.log(users);

  return (
    <div>App</div>
  )
}

export default App