import React, { useContext } from 'react'
import { ImTablet } from "react-icons/im";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaLaptop } from 'react-icons/fa6'
import DataContext from '../context/DataContext';

const Header = ({title}) => {

  const {width}= useContext(DataContext)
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width<768? <HiDevicePhoneMobile />
        :width< 992 ? <ImTablet /> 
        :<FaLaptop/>
        }
    </header>
  )
}

export default Header