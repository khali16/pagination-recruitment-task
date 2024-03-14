import { useProductsContext } from "../../hooks/useProductsContext";
import { ProductList } from "../ProductList/ProductList";
import { FunctionComponent } from "react";

const ProductsSection: FunctionComponent = () => {
  const { data } = useProductsContext();

  if (data) {
    if ("total_pages" in data) {
      return (
        <>
          <ProductList.Root>
            <ProductList.MultipleProducts products={data.data} />
          </ProductList.Root>
          <ProductList.Pagination
            page={data.page}
            total_pages={data.total_pages}
          />
        </>
      );
    } else {
      return (
        <ProductList.Root>
          <ProductList.SingleProduct product={data.data} />
        </ProductList.Root>
      );
    }
  }
};

export default ProductsSection;
