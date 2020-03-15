import React from 'react'
import {MyFormikForm} from './MyFormikForm'

export default function MaterialFormDemoApp() {
  return (
    <div style={{textAlign: "center"}}>
      <MyFormikForm onSubmit={({firstName, lastName, email})=>{
        console.log()
      }}/>
    </div>
  )
}
