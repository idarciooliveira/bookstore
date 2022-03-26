import { LayoutProps } from "../types/pageWithLayout";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";


const Layout: LayoutProps = ({ children }) => {
    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <SideBar />
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Layout;