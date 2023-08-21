import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import LoanTypeSelector from '../components/Shared/LoanTypeSelector';
import RecommendedLoans from '../components/Shared/RecommendedLoans';
function HouseLoan() {
    const formOptionMaturities = [
        { value: '12', name: '1 Yıl (12 Ay)' },
        { value: '24', name: '2 Yıl (24 Ay)' },
        { value: '36', name: '3 Yıl (36 Ay)' },
        { value: '48', name: '4 Yıl (48 Ay)' },
        { value: '60', name: '5 Yıl (60 Ay)' },
        { value: '72', name: '6 Yıl (72 Ay)' },
        { value: '84', name: '7 Yıl (84 Ay)' },
        { value: '96', name: '8 Yıl (96 Ay)' },
        { value: '108', name: '9 Yıl (108 Ay)' },
        { value: '120', name: '10 Yıl (120 Ay)' },
    ];
    const isNestedRoute = ['/konut-kredisi', '/konut-kredisi/'].includes(useLocation().pathname);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/*  Page content */}
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <div>
                                <LoanTypeSelector formOptionMaturities={formOptionMaturities} />
                            </div>
                            {
                                isNestedRoute ?
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