import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import menuIcon from '@iconify-icons/mdi/menu';
import closeIcon from '@iconify-icons/mdi/close';
import axios from 'axios';
import { logout, setUser } from './Redux/slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        dispatch(setUser(response.data));
        console.log(user)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    console.log(user)

    if (!user && localStorage.getItem('token')) {
      fetchUser();
    }
  }, [dispatch,user]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } text-white`}
    >
      <div className="popup lg:hidden md:hidden block">
        <button onClick={toggleNavBar} className="p-4">
          <Icon icon={isOpen ? closeIcon : menuIcon} width="24" height="24" />
        </button>
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } p-4`}
        >
          <ul className="flex flex-col space-x-4 p-4 font-oswald tracking-wide">
            <li className="relative text-black font-bold text-lg px-2 py-1">
              <Link
                to="/"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/about"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                About
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/services"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                Services
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/rooms"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                Rooms
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/reservation"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                Reservation
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/blog"
                className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
              >
                Blog
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 p-4 font-oswald tracking-wide">
          <li className="relative text-black font-bold text-lg px-2 py-1">
            <Link
              to="/"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li className="relative text-white font-bold text-lg px-2 py-1">
            <Link
              to="/about"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li className="relative text-white font-bold text-lg px-2 py-1">
            <Link
              to="/gallery"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              Gallery
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li className="relative text-white font-bold text-lg px-2 py-1">
            <Link
              to="/rooms"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              Rooms
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li className="relative text-white font-bold text-lg px-2 py-1">
            <Link
              to="/reservation"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              Reservation
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li className="relative text-white font-bold text-lg px-2 py-1">
            <Link
              to="/blog"
              className="relative text-white font-bold text-lg px-2 py-1 hover:text-gray-600"
            >
              Blog
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
            </Link>
          </li>
          {user ? (
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <button onClick={handleLogout} className="hover:text-gray-600">
                {user.name}
              </button>
            </li>
          ) : (
            <li className="relative text-white font-bold text-lg px-2 py-1">
              <Link
                to="/login"
                className="relative text-white bg-black font-bold text-lg border rounded-md px-4 py-1 hover:text-gray-600"
              >
                Login
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-red-900 rounded-full opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="font-extrabold p-5 cursor-pointer font-oswald tracking-wide">
        <Link to="/">SHAHEEN <br /> &nbsp;&nbsp;HOTEL</Link>
      </div>
    </div>
  );
};

export default Navigation;
