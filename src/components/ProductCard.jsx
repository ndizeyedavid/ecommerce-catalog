import toast from "react-hot-toast";

export default function ProductCard({ id, img, productName, price, ratings, category, setCart }) {

     function addToCart() {
          const cartItem = {
               id: id,
               img: img,
               name: productName,
               price: price,
          }

          const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

          const productExists = currentCart.some(item => item.id === id);

          if (productExists) {
               toast.error("This product is already in your cart!");
               return;
          }

          const updatedCart = [...currentCart, cartItem];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          setCart(updatedCart);
          toast.success("Product added to cart!");
     }

     return (
          <div className="card bg-base-100 w-80 shadow-sm">
               <figure>
                    <img
                         src={img}
                         className="w-full h-[240px] bg-primary object-cover"
                         alt="Shoes" />
               </figure>
               <div className="card-body space-y-3">

                    <div className="flex justify-between">
                         <h2 className="card-title">{productName}</h2>
                         <div className="badge bg-primary-content text-primary px-2 w-fit">{price.toLocaleString()} RWF</div>
                    </div>

                    <div className="flex items-center gap-2">
                         <span className="text-xl font-semibold">{ratings}</span>
                         <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                   ratings == i + 1 ?
                                        <div key={i} className="mask mask-star bg-primary" aria-label={`${i + 1} star`} aria-current="true"></div>
                                        :
                                        <div key={i} className="mask mask-star bg-primary" aria-label={`${i + 1} star`}></div>
                                   // 
                              ))}

                         </div>
                    </div>

                    <div className="card-actions">
                         {category.map((data, index) => (
                              <div key={index} className="badge badge-outline bg-primary-content text-primary">{data}</div>
                         ))}
                    </div>

                    <div>
                         <button onClick={() => addToCart(id)} className="btn btn-primary btn-block">Add to cart</button>
                    </div>
               </div>
          </div>
     )
}
