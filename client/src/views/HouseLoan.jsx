import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import LoanTypeSelector from '../components/Shared/LoanTypeSelector';
import RecommendedLoans from '../components/Shared/RecommendedLoans';
function HouseLoan() {
    const isMainRoute = ['/konut-kredisi', '/konut-kredisi/'].includes(useLocation().pathname);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/*  Page content */}
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <LoanTypeSelector type="house" />
                            {
                                isMainRoute ?
                                    <RecommendedLoans />
                                    :
                                    <Outlet />
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
}

export default HouseLoan;