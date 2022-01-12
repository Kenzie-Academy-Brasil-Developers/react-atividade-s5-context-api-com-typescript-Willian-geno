import { ReactNode } from "react";

import { CardProvider } from "./Cart";

interface ProviderProps {
  children: ReactNode;
};

const Providers = ({children}:ProviderProps) => {
  return <>
    <CardProvider>{children}</CardProvider>
  </>
};

export default Providers;