import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
    <footer className='Footer'>
       CopyRight  &copy; {today.getFullYear()}
    </footer>
  )
}

export default Footer