import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../Layout/SiteLayout";
import App from "../App";
import About from "../Pages/About/About";
import PaymentPage from "../Pages/Payment/Payment";
// import About from "../Pages/About";
import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
// import Products from "../Pages/Products";
// import ProductDetails from "../components/ProductDetails/ProductDetails";

export const routes = createBrowserRouter([
    {path:"/" , 
      Component:SiteLayout,
      children:[
        {path:"/" , Component:App},
        {path:"about",Component:About},
        {path:"contact",Component:Contact},
        {path:"products/:all-products",Component:Products},
        {path:"product/:id",Component:ProductDetails},
        {path:"checkout",Component:PaymentPage,
          loader: ({ context }) => {
          return { cartProducts: context.cartProducts }}
        },
      ]}
  ], {
    // This ensures the router works with Netlify's routing
    basename: "/"
  })