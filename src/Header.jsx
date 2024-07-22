import React from 'react'

export default function Header(props) {   // props calling method
  console.log(props.email)
  return (
      <div>
        <p>{props.email}</p>
       <div>welcome to header section </div>
      </div>

  )
}

