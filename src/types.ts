export interface ProductDetailsInterface {
    product: ProductInterface | undefined
    productSkus: ProductSkusInterface[]
}

export interface ProductSkusInterface {
    sku: number;
    name: string;
    stock: number;
    price: number;
}

export interface ProductInterface {
    id: number;
    brand: string;
    image: string;
    style: string;
    abv: string;
    substyle: string;
    origin: string;
    information: string;
    skus: Skus[];
}

export interface Skus {
    code: string;
    name: string;
}

export interface ProductStockPriceInterface {
    [key: number]: {
        stock: number;
        price: number;
    } 
}