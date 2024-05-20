import { productMap } from '@/mocks/products';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const productId = params.id;

  return Response.json({ product: productMap.get(productId) });
}
