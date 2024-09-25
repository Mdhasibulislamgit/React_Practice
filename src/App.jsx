import React from 'react'

const App = () => {

  const list = ["apple", "banana", "cherry"];
  return (
    <div>
      {list.map((item, index) => <p key={index}>{item} {index}</p>)}
    </div>
  )
}

export default App