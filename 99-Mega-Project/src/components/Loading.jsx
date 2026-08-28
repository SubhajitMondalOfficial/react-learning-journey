import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Loading = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-900">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="flex w-full max-w-md flex-col items-center rounded-2xl border border-gray-800 bg-gray-800/60 px-8 py-10 text-center shadow-xl">

                    {/* Spinner */}
                    <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" />

                    {/* Message */}
                    <h2 className="text-xl font-semibold text-white">
                        Wait a moment...
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        We are loading something awesome for you.
                    </p>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Loading;