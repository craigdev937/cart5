import React from "react";
import { createBrowserRouter, 
    RouterProvider, matchPath } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { Products } from "../pages/products/Products";
import { Detail } from "../pages/detail/Detail";
import { Categories } from "../pages/categories/Categories";
import { Cart } from "../pages/cart/Cart";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:id",
                element: <Detail />
            },
            {
                path: "/category",
                element: <Categories />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};


