import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProductsContext = () => {
  const productsContext = useContext(ProductsContext);

  if (productsContext === undefined) {
    throw new Error("useProductContext must be used within a Provider");
  }
  return productsContext;
};
