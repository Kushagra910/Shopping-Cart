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
    <div>
      {
        cart.length >= 0 ?
        (<div>
          <div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} itemIndex = {index} item = {item}/>
              })
            }
          </div>

          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p><span>Total Items:{cart.length}</span></p>
            </div>
            <div>
                <p><span>Total Amount : {`${totalAmount}`}</span></p>
                <button>
                  CheckOut Now
                </button>
              </div>
          </div>
        </div>) : 
        (<div>
          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
