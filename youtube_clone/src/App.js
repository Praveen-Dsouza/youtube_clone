import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/main/MainContainer";
import WatchPage from "./components/watch/WatchPage";

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children:[
    {
      path: '',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
