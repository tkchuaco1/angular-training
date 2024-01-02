import fetch, { Response } from "node-fetch";

export interface IProduct {
  id: string;
  name: string;
  price: string;
}

export function dataProduct(url: string): Promise<IProduct[]> {
  return new Promise<IProduct[]>((resolve, reject) => {
    fetch(url)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response)
        return response.json() as Promise<IProduct[]>;
      })
      .then((data: IProduct[]) => {
        resolve(data);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
}