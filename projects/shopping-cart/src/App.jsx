import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const { filteredProducts } = useFilters();
  const products = filteredProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={products} />
      <Footer />
    </CartProvider>
  );
}

export default App;
