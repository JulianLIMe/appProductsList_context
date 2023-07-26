import React, { useState } from "react";
import { useProductContext } from "../context/ProductsContext";
import "../styles/AddProduct.css";

interface Product {
  name: string;
  price: number;
}

const INITIAL_STATE = {
  name: "",
  price: 0,
};

const AddProduct = () => {
  const { state, dispatch } = useProductContext();

  const [product, setProduct] = useState<Product>(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProductID = state.products[state.products.length - 1]?.id + 1 || 1;
    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...product, id: newProductID },
    });
    setProduct(INITIAL_STATE);
  };

  return (
    <div className="container_form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={product.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
