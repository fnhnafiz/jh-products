import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default Routes;
