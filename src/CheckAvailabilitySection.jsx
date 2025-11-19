import './home.css'
import room4image from './assets/pic/room-04.jpg'
import ImageSlider from './Pages/ImageSlider';




const CheckAvailability = () => {




  return (
    <div className='flex items-center justify-center flex-wrap'>    <section className="bg-white text-black p-10">
      <h2 className="text-[24px] font-bold mb-6">Check Availability</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="mb-4">
            <span className="block mb-2">Check In</span>
            <input
              type="text"
              className="w-[40vw] border-b-[2px] border-black bg-transparent focus:outline-none"
              value="2024-08-25"
              readOnly
            />
          </div>
          <div className="mb-4">
            <span className="block mb-2">Nights</span>
            <select className="w-[40vw] border-b-[2px] border-black bg-transparent focus:outline-none">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <span className="block mb-2">Check Out</span>
            <input
              type="text"
              className="w-[40vw] border-b-[2px] border-black bg-transparent focus:outline-none"
              value="2024-08-26"
              readOnly
            />
          </div>
          <div className="mb-4">
            <span className="block mb-2">Adults</span>
            <select className="w-[40vw] border-b-[2px] border-black bg-transparent focus:outline-none">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>4</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <span className="block mb-2">Children</span>
            <select className="w-[40vw] border-b-[2px] border-black bg-transparent focus:outline-none">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        
      </div>
      <div className="flex items-center ">
          <button
            type="submit"
            className="font-bold font-oswald tracking-wide bg-black border rounded-full mt-10 h-[50px] w-[250px] text-white"
            value="Check Availability"
            id="button2"
          >Check Availability</button>
        </div>
    </section>
    {/* <div className='w-[40vw] h-auto'>
      <img src={room4image} className='object-fill object-center h-[50vh] w-full  border-black border-[3px] ' alt="room image " />
      <h1 className='font-bold font-oswald text-[40px]'>Feel Luxary</h1>
      

      
    </div> */}
  <div className='w-[500px] h-[350px] md:h-[50vh] md:w-[40vw] lg:h-[50vh] lg:w-[40vw] '>
    <ImageSlider/>
    </div>
    </div>

  );
};

export default CheckAvailability;
