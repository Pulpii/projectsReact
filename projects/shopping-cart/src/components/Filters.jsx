import "../css/Filters.css";
import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />

        {<output>${filters.minPrice}</output>}
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
