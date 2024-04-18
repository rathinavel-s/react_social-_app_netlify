import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page not found</h2>
         <p>Well, that's disappointing.</p>
         <p>
          Visit Our Homepage  <Link to='/' style={{textDecoration:'none'}}>Home</Link>
         </p>
    </main>
  )
}

export default Missing