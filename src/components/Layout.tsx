import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main className="flex-grow pt-[72px]">
                {/* pt-[72px] to account for fixed header height */}
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton isMobileMenuOpen={isMobileMenuOpen} />
        </div>
    );
};

export default Layout;
