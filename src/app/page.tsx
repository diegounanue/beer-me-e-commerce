import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import { ProductInterface } from "@/types";
import ProductCard from '../components/Product/Product';

export default function Home() {

  return (
    <main className="flex items-center justify-between p-24">
      {products.map((product: ProductInterface) => {
        return (
          <Link key={product.id} href={`${product.id}-${product.brand.replace(/\s+/g, "-").toLowerCase()}`}>
            <ProductCard brand={product.brand} image={product.image} key={product.id}/>
          </Link>
      )})}
    </main>
  );
}
