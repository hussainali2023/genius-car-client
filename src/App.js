import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-6xl mx-auto" data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
