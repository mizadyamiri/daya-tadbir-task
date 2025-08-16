import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/app/_libs/data-services';

export default function useProduct(productId: string) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: [productId],
    queryFn: () => getProduct(productId),
  });

  return { isLoading, product, error };
}
