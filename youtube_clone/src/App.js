import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/main/MainContainer";
import WatchPage from "./components/watch/WatchPage";
import SearchResults from "./components/searchResults/SearchResults";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: '',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <WatchPage/>
    },
    {
      path: 'results',
      element: <SearchResults/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Navbar /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
