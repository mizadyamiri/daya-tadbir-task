import axios, { AxiosError } from 'axios';
import { notFound } from 'next/navigation';

const client = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 8000,
  headers: { Accept: 'application/json' },
});

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await client.get<Product[]>('/products');
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.status === 404) notFound();
    console.error(error);
    throw error;
  }
}

export async function getProduct(id: number | string): Promise<Product> {
  try {
    const res = await client.get<Product>(`/products/${id}`);
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.status === 404) notFound();
    console.error(error);
    throw error;
  }
}
