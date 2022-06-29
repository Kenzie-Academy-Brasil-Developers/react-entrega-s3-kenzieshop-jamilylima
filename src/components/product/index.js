import { useDispatch } from "react-redux";
import { addtoCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { title, price, image, id } = product;

  function add() {
    dispatch(addtoCartThunk(product))
   return toast.success('Item adicionado com sucesso')
  }

  function remove() {
    dispatch(removeFromCartThunk(id))
    return toast.error('Item removido com sucesso')
  }

  return (

    <>
        <ToastContainer/>
    <div className="cart" >
      <figure>
        <img src={image} alt="" />
      </figure>
      <section>
      <h3>{title}</h3>
      <span>R$ {price}</span>
      </section>

      {isRemovable ? (
        <button onClick={remove}>
          Remover item do carrinho
        </button>
      ) : (
          <button onClick={add}>
          Adicionar item no carrinho
        </button>
      )}
    </div>
    </>
  );
};

export default Product;
