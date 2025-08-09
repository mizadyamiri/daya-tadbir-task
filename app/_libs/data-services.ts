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
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error(`${res.status}, ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getProduct(id: number | string): Promise<Product> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error(`${res.status}, ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
