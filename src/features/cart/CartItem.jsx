/* eslint-disable no-unused-vars */

import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold  ">{formatCurrency(totalPrice)}</p>
        <Button type="small">Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
