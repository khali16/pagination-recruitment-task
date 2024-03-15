import { useDebouncedQuery } from "../../hooks/useDebouncedQuery";
import { usePageControlContext } from "../../hooks/usePageControlContext";
import {
  ChangePage,
  MultipleProductDTO,
  SingleProductDTO,
} from "../../types/models";
import { ProductList } from "../ProductList/ProductList";
import { FunctionComponent } from "react";

interface Props {
  products: SingleProductDTO | MultipleProductDTO;
  changePage: ChangePage;
}

const ProductsSection: FunctionComponent<Props> = ({
  products,
  changePage,
}) => (
  <>
    {"total_pages" in products ? (
      <>
        <ProductList.Root>
          <ProductList.MultipleProducts products={products.data} />
        </ProductList.Root>
        <ProductList.Navigation
          page={products.page}
          total_pages={products.total_pages}
          changePage={changePage}
        />
      </>
    ) : (
      <ProductList.Root>
        <ProductList.SingleProduct product={products.data} />
      </ProductList.Root>
    )}
  </>
);

const withPropsProvider =
  (Component: FunctionComponent<Props>): FunctionComponent =>
  () => {
    const { filterId, page, searchParams, changePage } =
      usePageControlContext();
    const { products } = useDebouncedQuery(filterId, page, searchParams);

    if (products) {
      return <Component products={products} changePage={changePage} />;
    } else {
      throw new TypeError("Expected products in ProductSection to be defined.");
    }
  };

export default withPropsProvider(ProductsSection);
