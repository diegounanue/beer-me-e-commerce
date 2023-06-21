import { NextResponse } from "next/server";
import products from "@/data/stock-price";

interface ProductData {
  [key: number]: {
    stock: number;
    price: number;
  };
}

export async function GET (request: Request, {params}: {params: {id: number}}) {
    try {
        const { id } = params;
        if(products.hasOwnProperty(id)){
            const product = products[id];

            return NextResponse.json(product);
        } else {
            return NextResponse.json({"message": "Product not found"});
        }

    } catch (error) {
        return NextResponse.json({"message": error});
    }
}

