import { Conteiner, CardConteiner, PriceConteiner} from "./styled";
import {BsFillCartPlusFill} from "react-icons/bs";
import {useCart} from "../../Providers/Cart"

interface Product {
  id: number;
  title:string;
  description:string;
  price:number;
  image:string;
}

interface List {
  list:Product [];
}

const Card = ({list} : List) => {

  const {addProducts} = useCart();

  return <Conteiner>

    {list.map((item, index) => (
      <CardConteiner key = {index}>
          <img src={item.image}/>
          {item.title}
          <PriceConteiner>
            <p>{item.price.toFixed(2)}</p>
            <button onClick = {()=> addProducts(item)} ><BsFillCartPlusFill/></button>
          </PriceConteiner>
      </CardConteiner>
    ))}

  </Conteiner>
}

export default Card;