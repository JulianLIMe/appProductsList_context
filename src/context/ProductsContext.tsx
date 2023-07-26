import React, { createContext, useReducer, useContext } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface State {
  products: Product[];
  selectedProduct: Product | null;
}

type Action =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "SELECT_PRODUCT"; payload: Product }
  | { type: "CLEAR_SELECT_PRODUCT" };

type ProductsContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const INITIAL_STATE = {
  products: [],
  selectedProduct: null,
};

const ProductsContext = createContext<ProductsContextType>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "REMOVE_PRODUCT":
      if (
        state.selectedProduct ===
        state.products.find((product) => product.id === action.payload)
      ) {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
          selectedProduct: null,
        };
      } else {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
      }
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "CLEAR_SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

type ProductsProviderProps = {
  children: React.ReactNode;
};

const ProductsProvider = ({ children }: ProductsProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductContext = () => useContext(ProductsContext);

/* ProductsProcider sera wl que encierra los componentes que tendran acceso al estado creado con useReducer
y useProductContext es un hook creado para dispatchar la funcion reducer y actualizar el estado */
export { ProductsProvider, useProductContext };
