import { ProductsProvider } from "./context/ProductsContext";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import ProductSelected from "./components/ProductSelected";
import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <div className="container_app">
        <div className="left">
          <AddProduct />
          <Products />
        </div>
        <div className="right">
          <ProductSelected />
        </div>
      </div>
    </ProductsProvider>
  );
}

export default App;
