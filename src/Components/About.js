import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>

        <p>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>

        <Link to={"profile"}>profile</Link>
        <Outlet/>
        <div>
          <span htmlFor='Name'>Name</span>
          <p id='Name'>Abhi</p>
        </div>
        </div>
  )
}

export default About