import { ChangeEvent } from "react";

export type ConsumerFunction<T> = (param: T) => void;
export type ChangePage = (_: ChangeEvent<unknown>, value: number) => void;
export interface MultipleProductDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
}

export interface SingleProductDTO {
  data: Product;
}

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
