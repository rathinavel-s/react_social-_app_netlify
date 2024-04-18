import React, { useContext } from 'react'
import Feed from './Feed'
import { AiFillWechat } from "react-icons/ai";
import DataContext from '../context/DataContext';
const Home = () => {
  const {searchResults,fetchError,isLoading}=useContext(DataContext)
  return (
    <main className='Home'> 
        {isLoading && <p className='statusMsg'><h1>Loading <AiFillWechat />....</h1></p>}
        {!isLoading && fetchError && <p className='statusMsg'style={{color:"red"}}>{fetchError}</p>}
        {!isLoading && !fetchError && (searchResults.length ?  <Feed posts={searchResults}/>:<p className='statusMsg'>No posts to display.</p>)}
       
    </main>
  )
}

export default Home