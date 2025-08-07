import { useQuery } from '@tanstack/react-query';
import { getProducts, Product } from '../_libs/data-services';

export default function useProducts(preFetchedProducts: Product[]) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    initialData: preFetchedProducts,
  });

  return { isLoading, products, error };
}
