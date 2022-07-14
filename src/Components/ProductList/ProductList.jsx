import {
  useProducts,
  useProductsDispatch,
} from "../../Context/ProductProvider";
import "./ProductList.scss";

const ProductList = () => {
  const { products } = useProducts();
  const dispatch = useProductsDispatch();

  return (
    <section className="lists">
      <div className="container">
        {products.map((product) => (
          <div className="lists-container" key={product.id}>
            <span className="lists-container__title">{product.title}</span>
            <div className="lists-container__action">
              <span className="lists-container__action-date">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="lists-container__action-label">
                {product.category}
              </span>
              <span className="lists-container__action-quantity">
                {product.quntity}
              </span>
              <span
                className="lists-container__action-trash"
                onClick={() =>
                  dispatch({ type: "removeProductItem", id: product.id })
                }
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
