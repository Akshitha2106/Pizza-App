import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type }) {
  // const className =
  //   "bg-yellow-500 uppercase font-semibold text-stone-800 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  const base =
    "bg-yellow-500 uppercase font-semibold text-stone-800  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    small: base + "py-2 px-4 md:px-4 md:py-2.5 text-xs",
    secondary:
      "border-2 border-stone-300 uppercase font-semibold text-stone-400 py-2.5 px-4 inline-block rounded-full hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 transition-colors duration-300 focus:outline-none  focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
