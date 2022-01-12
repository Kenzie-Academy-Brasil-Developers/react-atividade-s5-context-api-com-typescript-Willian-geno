import { Conteiner, CardConteiner, PriceConteiner } from "./styled";
import { useCart } from "../../Providers/Cart";
import {AiFillDelete} from "react-icons/ai"

const Cart = () => {

  const {cart,deleteProduct} = useCart();

  return <Conteiner>
      {cart.map((item, index) => (
      <CardConteiner key = {index}>
          <img src={item.image}/>
          <p>{item.title}</p>
          <PriceConteiner>
            {item.price.toFixed(2)}
            <button onClick={() => deleteProduct(item)} ><AiFillDelete/></button>
          </PriceConteiner>
      </CardConteiner>
    ))}
  </Conteiner>
}

export default Cart;