import React from 'react'
import "./InputForm.css"


const InputForm = ({type, placeholder}) => {
  return (
    <>
        <input type={type} placeholder={placeholder} className="inputForm"></input>
        <br></br>
    </>
  )
}

export default InputForm