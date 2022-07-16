import { useDispatch, useSelector } from "react-redux";
import { removeProductsItems } from "../../Store/reducers/productsReducer";
import "./ProductList.scss";

const ProductList = () => {
  const { productsItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeProductsItems())

  return (
    <section className="lists">
      <div className="container">
        {productsItem.map((product) => (
          <div className="lists-container" key={product.id}>
            <span className="lists-container__title">
              {product.items.title}
            </span>
            <div className="lists-container__action">
              <span className="lists-container__action-date">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="lists-container__action-label">
                {product.items.categoryItem}
              </span>
              <span className="lists-container__action-quantity">
                {product.items.quantity}
              </span>
              <span
                className="lists-container__action-trash"
                onClick={() => dispatch(removeProductsItems(product.id))}
              >
                حذف
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
