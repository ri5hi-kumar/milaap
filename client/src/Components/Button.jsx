import React from 'react'
import { useState } from 'react'
export const Button = () => {
    const[submitted,setSubmitted]=useState(false)
  return (
    <div><button
    className="button-86"
    role="button"
    onClick={() => {
      setSubmitted(true);
    }}
  >
    Submit
  </button></div>
  )
}



