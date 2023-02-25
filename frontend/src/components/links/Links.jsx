import React from 'react'
import "./Links.css"

const Links = ({mensagem, msgLink, link}) => {
  return (
    <>
        <p className='paragrafoLink'>{mensagem} <a href={link} className='linkLink' target={'_blank'}>{msgLink}</a></p>
    </>
  )
}

export default Links