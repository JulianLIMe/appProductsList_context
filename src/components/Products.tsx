import { useProductContext } from "../context/ProductsContext";
import "../styles/Products.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products = () => {
  const { state, dispatch } = useProductContext();

  const handleClick = (product: Product) => {
    dispatch({ type: "SELECT_PRODUCT", payload: product });
  };

  const handleClickRemove = (id: number) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  return (
    <div className="container_products">
      {state.products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <p onClick={() => handleClick(product)}>{product.name}</p>
            <button onClick={() => handleClickRemove(product.id)}>X</button>
            <div className="floor"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
