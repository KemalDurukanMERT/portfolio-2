import React from 'react';
import Intro from '../Components/Intro';
import MainHome from '../Components/HomeComponents/MainHome'


const Home = () => {
  return (
    <div className='home'>
        <Intro/>
        <MainHome/>
        {/* <Skills/> */}
    </div>
  )
}

export default Home