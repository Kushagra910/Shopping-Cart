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
      <div>
        <div>
          <img src={item.image} alt="reload"/>
        </div>
        <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div>
            <RiDeleteBin5Fill onClick={removeFromCart}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
