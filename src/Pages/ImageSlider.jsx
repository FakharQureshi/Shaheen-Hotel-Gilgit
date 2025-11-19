// src/components/ImageSlider.jsx
// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Import images
import img1 from '../assets/pic/gellary1.jpg';
import img2 from '../assets/pic/gellary2.jpg';
import img3 from '../assets/pic/gellary3.jpg';
import img4 from '../assets/pic/gellary4.jpg';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';

const items = [
  <img src={img1} alt="Image 1" key={false}  className='w-full h-full border-black border-[3px] rounded-lg' />,
  <img src={img2} alt="Image 2" key={faFaceAngry}  className='w-full h-full border-black border-[3px] rounded-lg' />,
  <img src={img3} alt="Image 3" key={faFaceAngry}  className='w-full h-full border-black border-[3px] rounded-lg' />,
  <img src={img4} alt="Image 4" key={faFaceAngry}  className='w-full h-full border-black border-[3px] rounded-lg' />,
];

const ImageSlider = () => {
  return (
    <AliceCarousel

      autoPlay
      autoPlayInterval={3000}
      infinite
      
      
      items={items}

    />
  );
};

export default ImageSlider;
