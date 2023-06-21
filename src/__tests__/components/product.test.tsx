import ProductCard from '@/components/Product/Product';
import { render, screen } from '@testing-library/react';

describe('ProductCard', () => {
    it('renders the product details correctly', () => {
      const image = '/example.com/image.jpg';
      const brand = 'Example Brand';
      render(<ProductCard image={image} brand={brand} />);
      expect(screen.getByAltText(brand)).toBeInTheDocument();
      expect(screen.getByText(brand)).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Ver detalle');
    });
     it('displays the image correctly', () => {
      const image = '/example.com/image.jpg';
      const brand = 'Example Brand';
      render(<ProductCard image={image} brand={brand} />);
      const imgElement = screen.getByAltText(brand);
      expect(imgElement).toHaveAttribute('width', '300');
      expect(imgElement).toHaveAttribute('height', '300');
    });
  });