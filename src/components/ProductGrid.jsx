import ProductCard from "./ProductCard";

export default function ProductGrid({ filters, products, setCart }) {
     const filteredProducts = products.filter(product => {
          if (filters.categories.length > 0 && !product.category.some(cat => filters.categories.includes(cat.toLowerCase()))) {
               return false;
          }
          if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
               return false;
          }
          if (product.ratings < filters.minRating) {
               return false;
          }
          return true;
     });

     return (
          <div className="mt-[20px] w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
               {filteredProducts.map((value, index) => (
                    <ProductCard
                         key={index}
                         id={value.id}
                         img={value.img}
                         productName={value.productName}
                         price={value.price}
                         ratings={value.ratings}
                         category={value.category}
                         setCart={setCart}
                    />
               ))}
          </div>
     )
}
