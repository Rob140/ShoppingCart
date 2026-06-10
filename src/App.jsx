import "./App.css";
import Nav from "./Component/Nav";
import CartContext from "./Component/CartContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductList from "./Component/ProductList";
import ProductDetail from "./Component/ProductDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<ProductList />} />
        <Route path="/prod/:id" element={<ProductDetail />} />
      </>,
    ),
  );

  return (
    <CartContext>
      <Nav />
      <RouterProvider router={router} />
    </CartContext>
  );
}

export default App;
