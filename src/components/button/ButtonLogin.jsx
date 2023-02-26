import React from 'react'
import "./ButtonLogin.css"

const ButtonLogin = () => {
  function alertPage() {
    alert("Seja Bem vindo");
  }

  return (
    <>
        <button type='submit' className='ButtonLogin' onClick={alertPage}>Login</button>
    </>
  )
}

export default ButtonLogin