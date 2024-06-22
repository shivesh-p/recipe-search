import ReactDOM from "react-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Ingredients from "./components/Ingredients";
import Instrunctions from "./components/Instrunctions";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/instrunctions" element={<Instrunctions />} />
        <Route
          path="/recipe/:id/ingredients"
          element={<Ingredients></Ingredients>}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
