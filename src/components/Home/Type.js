import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Full-Stack Web Developer',
          'EX-Intern at JP Morgan Chase',
          'Cisco Certified Networker',
          'Data Science Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
