
import aboutImage from '../assets/pic/about2.jpg'
import { Icon } from '@iconify/react';
import buildingIcon from '@iconify/icons-mdi/building';
// import suitcaseIcon from '@iconify/icons-mdi/suitcase';
// import bellIcon from '@iconify/icons-mdi/bell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const About = ({navigation}) => {
  return (
    <div>
       {navigation}
      <div className='w-screen h-screen flex flex-col items-center justify-center' style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${aboutImage})`,
      backgroundSize: 'cover', // Ensure the image covers the div
      backgroundPosition: 'center', // Center the image
    }}>
      <h1 className=' w-[60vw] text-center text-[4vw] font-extrabold text-white font-oswald tracking-wide' >Welcome to Shaheen Hotel Where Hospitality Meets Excellence</h1>
      <div className='h-20 border-r-[4px] border-white'></div>
      <p className='text-white font-bold text-[20px] font-oswald'>Explore About Us</p>
      

      </div>
      <div className="second-slide-about h-auto w-screen flex gap-10 items-center justify-start p-5 flex-wrap">
        <div className='w-[450px] h-[400px]  flex flex-col items-center justify-center gap-3'>
        <div className=''>
    <Icon icon={buildingIcon} width={100} height={100} />
    
  </div>
          <h2 className='font-bold text-[30px] font-oswald'>Comfortable Room</h2>
          <p className='text-center text-[20px] text-slate-600 font-oswald'>far far away , behind the word mountains far from the countries vokalia and consonantia there live the blind tests separeted they</p>
          <button className=' border-b-[3px] border-black font-oswald'>CHECK MORE DETAILS</button>
        </div>
        <div className='w-[450px] h-[400px]  flex flex-col items-center justify-center gap-3'>
        <div className=''>
        <FontAwesomeIcon icon={faSuitcase} className='h-[100px] w-[100px]'  />
    
  </div> 
          <h2 className='font-bold text-[30px] font-oswald'> Top Level Service</h2>
          <p className='text-center text-[20px] text-slate-600 font-oswald'>far far away , behind the word mountains far from the countries vokalia and consonantia there live the blind tests separeted they</p>
          <button className=' border-b-[3px] border-black font-oswald'>CHECK MORE DETAILS</button>
        </div>
        <div className='w-[450px] h-[400px]  flex flex-col items-center justify-center gap-3'>
        <div className=''>
        <FontAwesomeIcon icon={faBell} className='h-[100px] w-[100px]' />
    
  </div>
          <h2 className='font-bold text-[30px] font-oswald'>Very Convenience</h2>
          <p className='text-center text-[20px] text-slate-600 font-oswald'>far far away , behind the word mountains far from the countries vokalia and consonantia there live the blind tests separeted they</p>
          <button className=' border-b-[3px] border-black font-oswald'>CHECK MORE DETAILS</button>
        </div>
        
      </div>
    </div>
  )
}

export default About