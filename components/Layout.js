import { Head } from "next/document";
import Footer from "./Footer";
import Navbar from "./navbar";

export default ({children}) => {
    return (
    <main>
        <div>
            {/*<Navbar />*/}
        </div>
        <div>{children}</div>
        <Footer />
    </main>)
};