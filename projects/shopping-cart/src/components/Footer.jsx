import "../css/Footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export function Footer() {
  // const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      {JSON.stringify(
        {
          CartContent: cart.map(
            (product) => `${product.title} x ${product.quantity}`
          ),
        },
        null,
        2
      )}
    </footer>
  );
}
