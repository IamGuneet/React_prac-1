import React from 'react'
import Title1 from './title1'
import Facts from './facts'
import Footer from './footer'
import img from "./img.jpg"
function app() {
  return (
    <div>
      <h1>Hyderabad</h1>
      <Title1 />
      <Facts  />
      <img 
      src={img} 
      alt="img"
      />
      <Footer  />

    </div>
  )
}

export default app
