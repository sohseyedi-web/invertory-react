import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { productsItem } = useSelector((state) => state.products);
  const hasItem = productsItem.length;

  return (
    <nav className="navs">
      <div className="navs-container container">
        <div className="navs-container__logo">برنامه انبارداری با ریکت</div>
        <span className="navs-container__number">{hasItem}</span>
      </div>
    </nav>
  );
};

export default Navbar;
