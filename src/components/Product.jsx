import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
  }
  return (
    <div>
      <div><p>{post.title}</p></div>
      <div><p>{post.description}</p></div>
      <div>
        <img src={post.image} alt="reload"/>
      </div>
      <div><p className="text-slate-600">{`$${post.price}`}</p></div>
      {
        cart?.some((entity) => entity.id === post.id) ? 
        (<button
        onClick={removeFromCart}>
          Remove Item
        </button>) : 
        (<button 
        onClick={addToCart}>
          Add to Cart
        </button>)
      }
    </div>
  );
};

export default Product;
