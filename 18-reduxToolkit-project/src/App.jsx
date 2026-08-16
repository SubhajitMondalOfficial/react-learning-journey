import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
  import { ToastContainer, } from 'react-toastify';
  import Layout from "./Layout"; 


const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <Routes>
         <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;