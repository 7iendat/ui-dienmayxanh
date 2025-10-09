import { axiosClient } from "./axiosClient";

export const getAllCategory = async (): Promise<string[]> => {
  const res = await axiosClient.get("/products/categories");
  return res.data;
};

export const getProductByCategories = async (
  slug: string
): Promise<string[]> => {
  const res = await axiosClient.get(`/products/category/${slug}`);
  return res.data.products;
};
