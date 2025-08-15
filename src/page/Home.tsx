// import { useState } from 'react'
// import Gallery from '../Components/Gallery'
import LandingPage from '../Components/LandingPage'
import AboutUs from '../Components/AboutUs'

import TeamPage from '../TeamPage/TeamPage'
import Gallery from '../Components/Team/Gallery'


import Footer from '../Components/Footer'
import ScrollTransition, { ScrollStackItem } from '../Components/ScrollTransition'
const danceteamImg = new URL('../assets/events/danceteam.jpg', import.meta.url).href
const garbaImg = new URL('../assets/events/garba.JPG', import.meta.url).href
const freshersImg = new URL('../assets/events/freshers.jpg', import.meta.url).href
const cardbgImg = new URL('../assets/events/Cardbg.jpg', import.meta.url).href




const Home = () => {

  return (
    <div>
      <div id="home">
        <LandingPage />
      </div>
       {/* Mobile-only CSS override to widen scroll stack by reducing side padding */}
       <style>{`
         @media (max-width: 640px) {
           .home-scroll-wide .scroll-stack-inner { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
         }
       `}</style>
       <div className="relative overflow-hidden home-scroll-wide">
        <ScrollTransition
          itemDistance={-120}
          itemStackDistance={40}
          baseScale={0.92}
          itemScale={0.04}
          stackPosition="10%" // closer to top
          scaleEndPosition="5%"
          blurAmount={0}
          rotationAmount={0}
        >
          <ScrollStackItem>
            <div className="flex items-center justify-center w-full h-[70vh]  rounded-[40px] overflow-hidden">
              <img src={danceteamImg} alt="Dance Team" className="w-full h-full object-cover rounded-[40px] opacity-70" />
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="flex items-center justify-center w-full h-[70vh] bg-black
             rounded-[40px] overflow-hidden">
              <img src={garbaImg} alt="Garba" className="w-full h-full object-cover rounded-[40px] opacity-70" />
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="flex items-center justify-center w-full h-[70vh] bg-black rounded-[40px] overflow-hidden">
              <img src={freshersImg} alt="Freshers" className="w-full h-full object-cover rounded-[40px]" />
            </div>
          </ScrollStackItem>
                     {/* About Us Card as last card */}
            <ScrollStackItem >
             <div className="flex items-center justify-center w-full h-[70vh] bg-black rounded-[40px] overflow-hidden">
               <img src={cardbgImg} alt="Card Background" className="w-full h-full object-cover rounded-[40px]" />
             </div>
           </ScrollStackItem>
        </ScrollTransition>
      </div>
      <div id="about">
        <AboutUs/>
      </div>
      
      <div id="Team" className="relative">
        <TeamPage/>
      </div>

      
      
      <div id="gallery" className="relative">
        <Gallery/>
      </div>
       
      <div id="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home
