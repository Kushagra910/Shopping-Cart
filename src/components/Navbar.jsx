import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
const URL = 'https://raw.githubusercontent.com/Kushagra910/Shopping-Cart/master/public/logo.png';

const Navbar = () => {

  const {cart} = useSelector((state)=>state);
  return (
    <div className='fixed top-0 bg-slate-900 w-full z-10'>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div>
          <img src = {`${URL}`} className="h-10 sm:h-14" alt='reload'/>
        </div>
      </NavLink>
        <div className='flex items-center space-x-6 text-white font-medium mr-5'>
        <NavLink to='/'>
        <p>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <div className='relative'>
          <FaShoppingCart className='text-2xl'/>
          {
            cart.length>0 && 
            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce'>{cart.length}</span>
          }
          </div>
        </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
