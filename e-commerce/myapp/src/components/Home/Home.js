import React from 'react'
import Headerdrop from './Headerdrop'
import Headerslider from './Headerslider'
import Homesec1 from './Homesec1'
import Homesec2 from './Homesec2'
import PropularProduct from "../PropularProduct/PopularProducts"

function Home() {
  return (
    <div>
      <Headerdrop/>
      <Headerslider/>
      <Homesec1/>
      <PropularProduct/>
      <Homesec2/>
    </div>
  )
}

export default Home