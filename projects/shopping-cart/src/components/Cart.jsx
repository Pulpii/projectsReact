import "../css/Cart.css";
import {
  AddToCartIcon,
  RemoveFromCartIcon,
  CartIcon,
  ClearCartIcon,
} from "./icons";
import { useCart } from "../hooks/useCart";
import { useId } from "react";

function CartItem({
  thumbnail,
  price,
  quantity,
  title,
  addToCart,
  removeFromCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity} </small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const cardCheckboxId = useId();

  return (
    <>
      <label htmlFor={cardCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cardCheckboxId} />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </ul>

        {cart.length === 0 ? (
          <p>No hay productos en tu carrito. consulta todas nuestras ofertas</p>
        ) : (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  );
}
