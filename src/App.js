import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/about";
import Contact from "./components/contact";
import RestaurentMenu from "./components/RestaurentM";
import Error from "./components/Error";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; // Correct imports
 const About=lazy(()=>import("./components/about"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </React.Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);