import Nav from "./Components/Navbar/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Components/store";
import AllShows from "./Components/Shows/AllShows";

function App() {
  const route = createBrowserRouter([
    { path: "/", element:<> <Nav /> </> ,children:[
        {index:true , element:<AllShows/>},
    ]},
  ]);

  
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </>
  );
}

export default App;
