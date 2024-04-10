import React from 'react'
import Link from 'next/link'
import About from "../(component)/About"
import Imagea from './(component6)/Imagea'
import Carousel from './(component6)/Carousel'
import Ben from './(component6)/Ben'

function page() {
  return (
    <div>
      <Imagea />
      <Carousel />
      <Ben />
    </div>
  )
}

export default page
