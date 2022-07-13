import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./CategoryForm.scss";

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);

  const cancelHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <section className="category">
      <div className="container category-container">
        {isShow ? (
          <div className="category-container__box">
            <h2 className="category-container__box-title">دسته بندی جدید:</h2>
            <form className="category-container__box-form">
              <div className="category-container__box-form__inputs">
                <label htmlFor="title">نام دسته بندی</label>
                <input type="text" id="title" name="title" />
              </div>
              <div className="category-container__box-form__inputs">
                <label htmlFor="description">توضیحات</label>
                <textarea name="description" id="description"></textarea>
              </div>
              <div className="category-container__box-form__buttons">
                <button className="category-container__box-form__buttons-com">
                  ذخیره
                </button>
                <button
                  className="category-container__box-form__buttons-can"
                  onClick={cancelHandler}
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button className="category-container__action" onClick={() => setIsShow(true)}>
            <span>
              <FiPlus size={26} />
            </span>
            ایجاد دسته بندی
          </button>
        )}
      </div>
    </section>
  );
};

export default CategoryForm;
