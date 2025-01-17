import React from 'react'
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile-pic.png)] bg-left lg:bg-[15%] bg-cover'
        style={{backgroundSize: "35%"}}
        >
        <NavBar/>

        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] py-12'>
            <div className='hidden lg:block'></div>
            <div className='text-[50px] sm:text-[90px] font-bold leading-tight flex justify-center'>
                <div>
                    <p data-aos="flip-right" className='text-center'>Anosha Fatima</p>
                    <p data-aos="flip-right">Welcome To My</p>
                    <p data-aos="flip-right" className='text-center'>Portfolio</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero