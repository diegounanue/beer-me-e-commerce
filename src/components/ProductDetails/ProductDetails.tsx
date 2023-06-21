import { ProductDetailsInterface } from "@/types";
import styles from "./ProductDetails.module.scss";
import Image from "next/image";

const ProductDetails: React.FC<ProductDetailsInterface> = ({
  product,
  productSkus,
}) => {
  return (
    <div className={styles.productDetail}>
      <Image
        className={styles.productImage}
        src={product!.image}
        alt={product!.brand}
        width={300}
        height={300}
      />
      <div className={styles.productInfo}>
        <h1 className={styles.productBrand}> {product?.brand}</h1>
        <p className={styles.productStyle}> <span className="text-xl text-yellow-500"> Style: </span>  {product?.style}</p>
        <p className={styles.productSubstyle}> <span className="text-xl text-yellow-500">Substyle: </span> {product?.substyle}</p>
        <p className={styles.productAbv}> <span className="text-xl text-yellow-500">Abv: </span>Abv: {product?.abv}</p>
        <p className={styles.productOrigin}> <span className="text-xl text-yellow-500">Origin: </span> {product?.origin}</p>
        <p className={styles.productInformation}>
        <span className="text-xl text-yellow-500"> Information:</span> {product?.information}
        </p>
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th className={styles.tableTitle}> Name </th>
              <th className={styles.tableTitle}> Stock </th>
              <th className={styles.tableTitle}> Price </th>
            </tr>
          </thead>
          <tbody>
            {productSkus.map((item) => {
              return (
                <tr key={item.sku}>
                  <td className={styles.dataCell}>{item.name}</td>
                  <td className={styles.dataCell}>{item.stock}</td>
                  <td className={styles.dataCell}>
                    ${(item.price / 100).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
