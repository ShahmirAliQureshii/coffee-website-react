import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Steps from "./pages/Steps";
import Shop from "./pages/Shop";
import Testimonials from "./pages/Testimonials";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import PurchaseCompleted from "./pages/PurchaseCompleted";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "steps",
        element: <Steps />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "checkout/:id/success",
        element: <PurchaseCompleted />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "privacy policy",
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
