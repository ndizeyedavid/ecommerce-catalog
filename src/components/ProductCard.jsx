
export default function ProductCard({ id, img, productName, price, ratings, category }) {

     function addToCart(id) {
          console.log(id)
     }

     return (
          <div className="card bg-base-100 w-80 shadow-sm">
               <figure>
                    <img
                         src={img}
                         className="w-full h-[240px] object-cover"
                         alt="Shoes" />
               </figure>
               <div className="card-body space-y-3">

                    <div className="flex justify-between">
                         <h2 className="card-title">{productName}</h2>
                         <div className="badge bg-primary-content text-primary px-1">{price.toLocaleString()} RWF</div>
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
                              <div key={index} className="badge badge-outline bg-primary-content">{data}</div>
                         ))}
                    </div>

                    <div>
                         <button onClick={() => addToCart(id)} className="btn btn-primary btn-block">Add to cart</button>
                    </div>
               </div>
          </div>
     )
}
