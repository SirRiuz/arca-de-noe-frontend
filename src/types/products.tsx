// src/types/product.ts
export interface Product {
    id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    discountPrice?: number;
    image: string;
    tags: string[];
    description: string;
  }
  
  export interface CartItem extends Pick<Product, 'id' | 'name' | 'price' | 'image'> {
    quantity: number;
  }