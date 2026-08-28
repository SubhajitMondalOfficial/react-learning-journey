import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { Outlet } from "react-router-dom";

import authService from "./appwrite/auth"; 
import {login, logout} from "./features/authSlice"
import { Header, Footer, Loading,  } from "./components";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .catch((error) => {
                console.error("Failed to get current user:", error);
                dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
        <div className="min-h-screen flex flex-col bg-[#070912] text-white">

            <Header />

            <main className="flex-1">
                <h2>TEST</h2>
            </main>

            <Footer />

        </div>
    ) : (
        <Loading />
    );
}


export default App