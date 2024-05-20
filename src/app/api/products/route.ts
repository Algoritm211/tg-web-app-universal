import { products } from '@/mocks/products';

export async function GET() {
  return Response.json({
    count: products.length,
    results: products,
  });
}
