
import Product from "../product";
import { useDispatch } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
import "./style.css"
import Header from "../header";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const response = await api.get("/products/");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(Product.price),
    }));

    setLoading(false);
    setProduct(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
    <Header/>
    <div className="produtos">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default Products;
