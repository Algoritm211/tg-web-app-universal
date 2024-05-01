import {Product} from "@/system/product";

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <Product />
  )
}
