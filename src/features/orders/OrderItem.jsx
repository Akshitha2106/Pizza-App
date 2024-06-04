/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { formatCurrency } from "./../../utilities/helpers";
// eslint-disable-next-line react/prop-types
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
