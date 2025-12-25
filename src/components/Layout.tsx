import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-[72px]">
                {/* pt-[72px] to account for fixed header height */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
