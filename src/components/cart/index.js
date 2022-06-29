import { useSelector } from "react-redux";
import Header from "../header";
import Product from "../product";
import "./style.css";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  const valorTotal = cart.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <>
      <Header />
      <div className="produtosCart">
        <div className="pedidos">
          <h1>Pedidos</h1>
        </div>

        <section>
          {cart.map((product) => (
            <Product key={product.id} product={product} isRemovable />
          ))}
        </section>

        <aside>
          <h1 className="resumo">Valor total do pedido</h1>

          <div className="total">
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Cart;
