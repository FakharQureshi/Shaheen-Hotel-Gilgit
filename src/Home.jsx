import  { useState } from 'react'
import Navigation from './Navigation'
import './index.css';
import img1 from './assets/pic/hotel-shaheen.jpg'
import img2 from './assets/pic/about.jpg'
import img3 from './assets/pic/about2.jpg'
import './home.css'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import About from './Pages/About';
import CheckAvailabilitySection from './CheckAvailabilitySection';
import { useEffect } from 'react';

const Home = () => {


const images = [
  img1,
  img2,
  img3
]

const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    
    );
  }, 3000); // Change image every 3 seconds

  return () => clearInterval(interval); // Cleanup on component unmount
}, []);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/reservation')
  }
  return (
    <>
     <Navigation className='fixed top-0'/>
    <div className='flex flex-col justify-center items-center ease-in transition-opacity duration-2000 bg-cover bg-center h-screen w-full
  bg-gradient-radial from-black via-silver to-white' style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${images[currentIndex]})`,
      backgroundSize: 'cover', // Ensure the image covers the div
      backgroundPosition: 'center', // Center the image
    }}>
       

<div>
        <h1 className=' w-[60vw] text-center text-[4vw] font-extrabold text-white font-oswald tracking-wide'>Discover Warmth and Comfort at Shaheen Hotel</h1>
        <p className='w-[65vw] text-center text-white text-[1.5vw] mt-6'>
        The luxury suite hotel Shaheen Hotel is one of the most stylish hotel in Gilgit Baltistan. This modern take on the traditional alpine lodge is located at the foot of the Kashrote</p>
        </div>
        <button id='button' onClick={handleClick} className='font-bold font-oswald tracking-wide bg-white border rounded-full mt-10 h-[50px] w-[250px] text-black'>Make A Reservation</button>
    </div>
    <CheckAvailabilitySection/>
    <div className=''>
      <About/>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home