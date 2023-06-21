import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { render } from '@testing-library/react';

 describe('ProductDetails', () => {
  const product = {
    id: 1,
    brand: 'Brand',
    style: 'Style',
    substyle: 'Substyle',
    abv: 'Abv',
    origin: 'Origin',
    information: 'Information',
    image: '/image-test.jpg',
    skus: []
  };
  const productSkus = [
    {
      sku: 1,
      name: 'Name 1',
      stock: 10,
      price: 1000,
    },
    {
      sku: 2,
      name: 'Name 2',
      stock: 5,
      price: 500,
    },
  ];
   it('renders without errors', () => {
    render(<ProductDetails product={product} productSkus={productSkus} />);
  });
   it('displays the product image correctly', () => {
    const { getByAltText } = render(<ProductDetails product={product} productSkus={productSkus} />);
    expect(getByAltText(product.brand)).toBeInTheDocument();
  });
   it('displays the product information correctly', () => {
    const { getByText } = render(<ProductDetails product={product} productSkus={productSkus} />);
    expect(getByText(product.brand)).toBeInTheDocument();
    expect(getByText(product.style)).toBeInTheDocument();
    expect(getByText(product.substyle)).toBeInTheDocument();
    expect(getByText(product.origin)).toBeInTheDocument();
    expect(getByText(product.information)).toBeInTheDocument();
  });
   it('displays the product SKU data correctly', () => {
    const { getByText } = render(<ProductDetails product={product} productSkus={productSkus} />);
    expect(getByText(productSkus[0].name)).toBeInTheDocument();
    expect(getByText(productSkus[0].stock)).toBeInTheDocument();
    expect(getByText('$10.00')).toBeInTheDocument();
    expect(getByText(productSkus[1].name)).toBeInTheDocument();
    expect(getByText(productSkus[1].stock)).toBeInTheDocument();
    expect(getByText('$5.00')).toBeInTheDocument();
  });
});