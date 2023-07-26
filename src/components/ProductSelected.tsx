import { useProductContext } from "../context/ProductsContext";
import { formatCurrency } from "../utilities/formatCurrency";
import "../styles/ProductSelected.css";

const ProductSelected = () => {
  const { state } = useProductContext();

  return (
    <div className="container_selected">
      <h1>{state.selectedProduct?.name}</h1>
      <h1 style={{ opacity: 0.3 }}>
        {formatCurrency(state.selectedProduct?.price || 0)}
      </h1>
    </div>
  );
};

export default ProductSelected;
