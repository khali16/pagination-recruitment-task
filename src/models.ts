export type ConsumerFunction<T> = (param: T) => void;
export interface ProductsList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
}

export interface SingleProduct {
  data: Product;
}

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
