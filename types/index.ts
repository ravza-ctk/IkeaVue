export interface Product {
    id?: string;
    name: string;
    price: number;
    description: string;
    categoryId: string;
    image: string;
    images?: string[];
    stock: number;
    sku?: string;
    dimensions?: any;
    color?: string;
    material?: string;
}

export interface Category {
    id?: string;
    name: string;
    image: string;
}

export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Order {
    id?: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: any; // Firestore Timestamp
    shippingAddress: Address;
}

export interface Address {
    title: string;
    fullAddress: string;
    city: string;
    zipCode: string;
}

export interface User {
    id?: string;
    email: string;
    displayName: string;
    phoneNumber?: string;
    addresses: Address[];
    role: 'user' | 'admin';
}
