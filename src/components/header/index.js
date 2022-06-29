import "./style.css"
import {  useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    function atualiza() {
        history.push("/cart")
        document.location.reload(true)
    }

    return (
        <header>
            <p onClick={()=>history.push("/")}>Kenzie Shop</p>
            <span onClick={atualiza}>Carrinho</span>
        </header>
    )
}

export default Header