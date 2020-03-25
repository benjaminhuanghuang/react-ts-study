import React, {useState} from 'react'

export default function () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={()=>{setCount(count+1)}}>Add</button>
      {count}
    </div>
  )
}
