import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import LoanTypeSelector from '../components/Shared/LoanTypeSelector';
import RecommendedLoans from '../components/Shared/RecommendedLoans';

function VehicleLoan() {
    const formOptionMaturities = [
        { value: '3', name: '3 ay' },
        { value: '6', name: '6 ay' },
        { value: '9', name: '9 ay' },
        { value: '12', name: '12 ay' },
        { value: '18', name: '18 ay' },
        { value: '24', name: '24 ay' },
        { value: '30', name: '30 ay' },
        { value: '36', name: '36 ay' },
        { value: '42', name: '42 ay' },
        { value: '48', name: '48 ay' },
    ];
    const formCarStatus = [
        { value: '0', name: '0 Km' },
        { value: '1', name: '2. El' },
    ]
    const isNestedRoute = ['/tasit-kredisi', '/tasit-kredisi/'].includes(useLocation().pathname);
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
                                <LoanTypeSelector formCarStatus={formCarStatus} isVehicle={true} formOptionMaturities={formOptionMaturities} />
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

export default VehicleLoan;