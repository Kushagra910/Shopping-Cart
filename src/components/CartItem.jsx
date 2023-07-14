import {RiDeleteBin5Fill} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/cartSlice';
import {toast} from 'react-hot-toast'

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div>
      <div className='flex flex-col gap-y-6  sm:flex-row sm:gap-x-10 items-center justify-center scroll-smooth'>
        <div>
          <img src={item.image} alt="reload" className='aspect-square sm:h-80 sm:w-80 object-contain'/>
        </div>
        <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-gray-700 text-lg'>{item.title}</h1>
        <h1 className='text-gray-400 text-sm'>{item.description.split(" ").splice(0,15).join(" ")+"..."}</h1>
        <div className='flex justify-between items-center'>
          <p className='text-green-700 font-bold'>${item.price}</p>
          <div className='bg-pink-300 w-8 h-8 flex justify-center items-center rounded-full hover:cursor-pointer hover:animate-spin'>
            <RiDeleteBin5Fill className='text-pink-700' onClick={removeFromCart}/>
          </div>
        </div>
        </div>
      </div>
      <div className='h-[0.1rem] w-full bg-slate-700 mb-5 mt-5'></div>
    </div>
  );
};

export default CartItem;
