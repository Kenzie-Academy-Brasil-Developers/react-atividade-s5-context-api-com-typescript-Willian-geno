import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart:Product[];
  addProducts: (product:Product) => void;
  deleteProduct: (product:Product) => void;

}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CardProvider = ({children}:CartProps) => {
  
  const [cart, setCart] = useState<Product[]>([]);

  const addProducts = (product:Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDelete:Product) => {
    const NewCart = cart.filter ((product) => {
      return product.title !== productToBeDelete.title;
    });
    setCart(NewCart);
  };

  return (
    <CartContext.Provider value ={{addProducts, cart ,deleteProduct}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);