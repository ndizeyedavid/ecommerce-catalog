import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import Axios from "axios";
import Loading from "./components/Loading";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  // filters
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 100000],
    minRating: 0,
  });

  useEffect(() => {
    Axios.get("/data/products.json").then((res) => {
      const data = res.data;
      setProducts(data);
      setLoading(false);
    })
  }, [])

  return (
    <main>
      <Toaster />

      <Header cart={cart} setCart={setCart} />

      <div className="flex gap-1">

        <FilterPanel onFilterChange={setFilters} />

        {loading ? <Loading /> : <ProductGrid setCart={setCart} filters={filters} products={products} />}
      </div>

    </main>
  )
}

export default App;