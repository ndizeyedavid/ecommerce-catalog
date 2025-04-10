import ProductCard from "./ProductCard";

export default function ProductGrid({ filters, products }) {
     return (
          <div className="mt-[20px] w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
               {products.map((value, index) => (
                    <ProductCard
                         key={index}
                         id={value.id}
                         img={value.img}
                         productName={value.productName}
                         price={value.price}
                         ratings={value.ratings}
                         category={value.category}
                    />
               ))}

          </div>
     )
}
