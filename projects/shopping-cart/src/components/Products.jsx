import "../css/Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    if (!cart) return false;
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div className="buttons-product">
                <button onClick={() => addToCart(product)}>
                  <AddToCartIcon />
                </button>
                {isProductInCart && (
                  <button
                    style={{ backgroundColor: "#63090c" }}
                    onClick={() => removeFromCart(product)}
                  >
                    <RemoveFromCartIcon />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
