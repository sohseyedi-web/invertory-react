import "./ProductForm.scss";

const ProductForm = () => {
  return (
    <section className="products">
      <div className="container products-container">
        <div className="products-container__box">
          <h2 className="products-container__box-title">محصول جدید:</h2>
          <form className="products-container__box-form">
            <div className="products-container__box-form__inputs">
              <label htmlFor="title">نام محصول</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="products-container__box-form__inputs">
              <label htmlFor="title">موجودی</label>
              <input type="number" id="title" name="title" />
            </div>
            <div className="products-container__box-form__inputs">
              <label htmlFor="title">دسته بندی</label>
              <select name="" id="">
                <option>انتخاب دسته بندی</option>
              </select>
            </div>
            <button className="products-container__box-form__buttons">
              اضافه کردن محصول
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
