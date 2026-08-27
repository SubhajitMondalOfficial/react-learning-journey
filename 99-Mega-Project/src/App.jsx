import { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth"
import {login, logout} from "./features/authSlice"

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        } else{
          dispatch((logout()))
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between text-white bg-gray-900">
      <div className="w-full block">
         
            <Header />
            <main>
               Todo{/* <Outlet/>  */}
            </main>
            <Footer />
        
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export default App;
