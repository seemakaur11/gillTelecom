import React from 'react';
import about from '../images/about.jpg';
import Navbar from './Navbar';
function About() {
  return (
    <div>
      {/* <Navbar /> */}
      <section id="about" style={{
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        position: 'relative',
        width: "100%",
        height: '100vh',
        marginTop: "-2rem",
        backgroundRepeat: "no-repeat",
      }}>
        <div className='row justify-content-center'>
          <h1 className='mt-5'>About</h1>
        </div>
      </section>
    </div>
  )
}

export default About