import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gettotalCartPrice, gettotalCartQauntity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";
function CartOverview() {
  const totalCartQauntity = useSelector(gettotalCartQauntity);
  const totalCartPrice = useSelector(gettotalCartPrice);
  if (!totalCartQauntity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base">
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalCartQauntity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
