import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/main/MainContainer";
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer";

const WatchPage = lazy(() => import("./components/watch/WatchPage"));
const SearchResults = lazy(() =>
  import("./components/searchResults/SearchResults")
);

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchResults />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
