import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'
import CartItem from '../components/CartItem'
const Cart = () => {
  const {cart} = useSelector((state) => state);  // fetching the initial state from slice

  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart]);
  return (
    <div className='flex justify-around w-8/12 mx-auto items-center relative'>
      {
        cart.length > 0 ?
        (<div className=' flex flex-col sm:flex-row items-center gap-16'>
          <div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} itemIndex = {index} item = {item}/>
              })
            }
          </div>
          <div className='flex flex-col gap-8 sm:gap-10 justify-center w-full sm:sticky sm:top-72 sm:bottom-10 scroll-smooth' >
            <div>
              <div className='uppercase text-green-700 font-bold text-[1rem] sm:text-[1.5rem] tracking-wide sm:fixed sm:top-40'>Your Cart</div>
              <div className='uppercase text-green-700 font-bold text-[1.3rem] sm:text-[2.5rem] tracking-wide sm:fixed sm:top-48'>Summary</div>
              <p className='font-semi-bold'><span>Total Items:{cart.length}</span></p>
            </div>
            <div className='flex flex-col gap-5 mb-8'>
                <p className='font-semi-bold'>Total Amount : <span className='font-bold'>${`${totalAmount}`}</span></p>
                <button className='bg-green-700 text-white py-4 rounded-3xl'>
                  CheckOut Now
                </button>
              </div>
          </div>
        </div>) : 
        (<div className='flex flex-col justify-center items-center h-screen overfloww-y-hidden gap-4'>
          <h1  className='text-2xl font-bold text-gray-700'>Cart Empty</h1>
          <NavLink to="/">
            <button className='py-2 px-6 sm:py-4 sm:px-20 bg-green-700 text-white rounded-3xl font-bold text-lg' >Shop Now</button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
