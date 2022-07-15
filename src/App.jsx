import Navbar from "./Components/Navbar/Navbar";
import ProductForm from "./Components/ProdcutForm/ProductForm";
import ProductList from "./Components/ProductList/ProductList";
import CategoryForm from "./Components/CategoryForm/CategoryForm";

function App() {
  return (
    <>
      <Navbar />
      <CategoryForm />
      <ProductForm />
      <ProductList />
    </>
  );
}

export default App;
