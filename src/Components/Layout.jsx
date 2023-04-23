/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className='bg-[#0b1323] min-h-screen text-white font-oswald'>
            <NavBar />
            <main className="px-6 lg:px-[5rem] py-4 scroll-smooth">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;