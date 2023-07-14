import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div
      className="flex flex-col items-center justify-between
    hover:scale-105 transition duration-300 ease-in hover:shadow-[0_0_90px_-15px_rgba(0,0,0,0.4)] gap-4 p-4 mt-10 sm:ml-5  rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate text-left w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").splice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[150px] lg:h-[180px]">
        <img src={post.image} alt="reload" className="h-full w-full" />
      </div>
      <div className="flex justify-between  sm:gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-bold">${post.price}</p>
        </div>
        {cart?.some((entity) => entity.id === post.id) ? (
          <button onClick={removeFromCart} 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]  p-1 px-3 uppercase hover:bg-gray-700 
          hover:text-white transition duration-300 ease-in">Remove Item</button>
        ) : (
          <button onClick={addToCart}
           className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] sm:text-[12px]  p-1 px-3 uppercase hover:bg-gray-700 
          hover:text-white transition duration-300 ease-in">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
