import { useState } from "react";
import {
  useProducts,
  useProductsDispatch,
} from "../../Context/ProductProvider";
import "./ProductForm.scss";

const ProductForm = () => {
  const { products, category } = useProducts();
  const dispatch = useProductsDispatch();
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    category: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "addProductItem", payload: productsFormData });
    setProductsFormData({ title: "", quantity: "", category: "" });
  };

  return (
    <section className="products">
      <div className="container products-container">
        {category.length === 0 ? null : (
          <div className="products-container__box">
            <h2 className="products-container__box-title">محصول جدید:</h2>
            <form className="products-container__box-form">
              <div className="products-container__box-form__inputs">
                <label htmlFor="title">نام محصول</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={productsFormData.title}
                  onChange={changeHandler}
                />
              </div>
              <div className="products-container__box-form__inputs">
                <label htmlFor="quantity">موجودی</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={productsFormData.quantity}
                  onChange={changeHandler}
                />
              </div>
              <div className="products-container__box-form__inputs">
                <label htmlFor="category">دسته بندی</label>
                <select
                  name="category"
                  id="category"
                  value={productsFormData.category}
                  onChange={changeHandler}
                >
                  <option>انتخاب دسته بندی</option>
                  {category.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="products-container__box-form__buttons"
                onClick={addNewProductHandler}
              >
                اضافه کردن محصول
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductForm;
