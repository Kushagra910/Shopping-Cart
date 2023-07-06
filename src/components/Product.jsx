import { useState } from "react";

const Product = ({post}) => {
  const [selected,setSelected] = useState(false);
  return (
    <div>
      <div><p>{post.title}</p></div>
      <div><p>{post.description}</p></div>
      <div>
        <img src={post.image}/>
      </div>
      <div><p className="text-slate-600">{`$${post.price}`}</p></div>
      <button>
        {selected ? <p>Remove Item</p> : <p>Add to Cart</p>}
      </button>
    </div>
  );
};

export default Product;
