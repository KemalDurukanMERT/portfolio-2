import React from 'react';
import Container from 'react-bootstrap/Container';
import Intro from '../Components/Intro';
import MainHome from '../Components/HomeComponents/MainHome'
import Skills from '../Components/Skills';

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