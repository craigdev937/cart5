export interface ICat {
    slug: string,
    name: string,
    url: string
};

export interface SCat {
    total: number,
    skip: number,
    limit: number,
    products: [{
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        thumbnail: string,
        images: string[]
    }]
};

export interface IData {
    total: number,
    skip: number,
    limit: number,
    products: [{
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        stock: number,
        thumbnail: string,
        images: string[]
    }]
};

export interface IProd {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    stock: number,
    thumbnail: string,
    images: string[]
};

export interface ICart extends IProd {
    quantity?: number
};

export interface ICartState {
    items: ICart[]
};



