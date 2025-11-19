import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import Home from './Home';
import About from './Pages/About';
import Reservation from './Pages/Reservation';
import Blog from './Pages/Blog';
import Rooms from './Pages/Rooms';
import Navigation from './Navigation';
import Gallery from './Pages/Gallery';
import LoginForm from './Pages/LoginForm';
import Signup from './Pages/SignUp';

function App() {
  return (
    <Router>
      <ToastContainer 
        position="top-center" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About navigation={<Navigation />} />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
