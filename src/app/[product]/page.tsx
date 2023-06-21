import productList from "@/data/products";
import { ProductSkusInterface, Skus } from "@/types";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { API_HOST } from "@/constants/constants";

interface Props {
  params: {
    product: string;
  };
}



const fetchProductStockAndPrice = async (id: number) => {
  const response = await fetch(`${API_HOST}/api/stock-price/${id}`, {
    next: { revalidate: 5 },
  });
  return response.json();
};

const ProductDetailsPage: React.FC<Props> = async ({ params }) => {
  const productDetail = productList.find((product) =>
    params.product.includes(product.id.toString())
  );

  async function getProductSkus(): Promise<ProductSkusInterface[]> {
    let productSkus: ProductSkusInterface[] = [];
    const skus = productDetail && productDetail.skus;
    if (skus) {
      const skuCodes = skus.map((item: Skus) => +item.code);
      const skuDetails = await Promise.all(skuCodes.map(fetchProductStockAndPrice));
      productSkus = skus.map((item: Skus, index: number) => ({
        sku: +item.code,
        name: item.name,
        stock: skuDetails[index].stock,
        price: skuDetails[index].price
      }));
    }
    return productSkus;
  }

  const productSkus = await getProductSkus();

  return (
    <>
      <ProductDetails product={productDetail} productSkus={productSkus}/>
    </>
  );
};

export default ProductDetailsPage;
