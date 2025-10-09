import { axiosClient } from "./axiosClient";

export const getProductLimit = async (
  limit: number,
  skip: number
): Promise<string[]> => {
  const res = await axiosClient.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data.products;
};
export const getAllProduct = async (): Promise<string[]> => {
  const res = await axiosClient.get("/products");
  return res.data.products;
};

export const getAllProductCategory = async (): Promise<string[]> => {
  const res = await axiosClient.get("/products/category-list");
  return res.data;
};

export const getProductById = async (id: number): Promise<string[]> => {
  const res = await axiosClient.get(`/products/${id}`);
  return res.data;
};
