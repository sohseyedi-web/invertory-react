import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductsItems } from "../../Store/reducers/productsReducer";

import "./ProductForm.scss";

const ProductForm = () => {
  const { categoryItem } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryItem: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();
    dispatch(addNewProductsItems(productsFormData));
    setProductsFormData({ title: "", quantity: "", categoryItem: "" });
  };

  return (
    <section className="products">
      <div className="container products-container">
        {!categoryItem.length ? null : (
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
                <label htmlFor="categoryItem">دسته بندی</label>
                <select
                  name="categoryItem"
                  id="categoryItem"
                  value={productsFormData.categoryItem}
                  onChange={changeHandler}
                >
                  <option>انتخاب دسته بندی</option>
                  {categoryItem.map(({ id, items }) => (
                    <option key={id} value={items.title}>
                      {items.title}
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
