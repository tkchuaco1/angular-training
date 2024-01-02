export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const productsList: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    quantity: 12,
  },
  {
    id: 2,
    name: "Product 1",
    price: 24,
    quantity: 13,
  },
  {
    id: 3,
    name: "Product 1",
    price: 21,
    quantity: 14,
  },
  {
    id: 4,
    name: "Product 1",
    price: 22,
    quantity: 15,
  },
  {
    id: 5,
    name: "Product 1",
    price: 23,
    quantity: 16,
  },
];

export const sumPrice = (products: IProduct[]): number => {
  const totalValue = products.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  return totalValue;
};

export const productWithPrice = (products: IProduct[]): IProduct[] => {
  const result: IProduct[] = products.filter((value, index) => {
    return value.price > 100;
  });

  return result;
};

export const renderDescriptionProduct = (products: IProduct[]): string[] => {
  const result: string[] = products.map((product: IProduct) => {
    return `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm`;
  });

  return result;
};

export const productsUnder100 = (producs: IProduct[]): number => {
  const result: number = producs
    .filter((product) => product.price < 100)
    .reduce((total, product) => total + 1, 0);

  return result;
};

export const getDiscountedProducts = (
  products: IProduct[],
  discount: number
): IProduct[] => {
  const result: IProduct[] = products.map((product: IProduct) => {
    return { ...product, price: product.price * ((100 - discount) / 100) };
  });

  return result;
};
