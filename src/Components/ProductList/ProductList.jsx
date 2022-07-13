import "./ProductList.scss";

const ProductList = () => {
  return (
    <section className="lists">
      <div className="container">
        <div className="lists-container">
          <span className="lists-container__title">سیب زمینی</span>
          <div className="lists-container__action">
            <span className="lists-container__action-date">
              {new Date().toLocaleDateString("fa-IR")}
            </span>
            <span className="lists-container__action-label">میوه</span>
            <span className="lists-container__action-quantity">5</span>
            <span className="lists-container__action-trash">حذف</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
