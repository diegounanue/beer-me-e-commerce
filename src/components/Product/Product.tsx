import Image from "next/image";
import styles from './Product.module.scss';

interface ProductCardInterface {
  image: string;
  brand: string;
}

const ProductCard = ({image, brand}: ProductCardInterface) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} width={300} height={300} alt={brand} />
      <h2 className={styles.name}> {brand} </h2>
      <button className={styles.button}> Ver detalle </button>
      </div>
  );
};

export default ProductCard;
