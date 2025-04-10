import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import Axios from "axios";
import Loading from "./components/Loading";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import Cart from "./components/Cart";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [filters, setFilters] = useState({});

  useEffect(() => {
    Axios.get("/data/products.json").then((res) => {
      const data = res.data;
      setProducts(data);
      setLoading(false);
    })
  }, [])

  return (
    <main>

      <Header />

      <div className="flex gap-1">

        <FilterPanel onFilterChange={setFilters} />

        {loading ? <Loading /> : <ProductGrid filters={filters} products={products} />}
      </div>

    </main>
  )
}

export default App;