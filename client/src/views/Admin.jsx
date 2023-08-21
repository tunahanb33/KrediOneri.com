import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { useState, useEffect } from 'react';
import AdminLoanTypeSelector from '../components/Admin/AdminLoanTypeSelector';
import LoanList from '../components/Admin/LoanList';
import axios from 'axios';
import LoanEditModal from '../components/Admin/LoanEditModal';
function Admin() {
    const baseApiUri = import.meta.env.VITE_BASE_API_URL;
    const [activeType, setActiveType] = useState('houseLoans');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLoan, setSelectedLoan] = useState({});
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [listItems, setListItems] = useState([]);
    const handleClick = (type) => {
        setActiveType(type)
    };
    const typesEqualUriParams = {
        houseLoans: 'housingLoan',
        consumerLoans: 'consumerLoan',
        vehicleStLoans: 'vehiclestloan',
        vehicleNdLoans: 'vehiclendloan'
    };
    const updateLoanDetail = (editedItem) => {
        axios.post(`${baseApiUri}/admin/${typesEqualUriParams[activeType]}/edit`, { ...editedItem })
            .then(res => {
                if(res.status == 200) {
                    const latestItems = listItems.map(item => {
                        if (item._id == editedItem._id) {
                            item = editedItem;
                            return item
                        } else return item
                    });
                    setSelectedLoan(editedItem);
                    setListItems(latestItems);
                }
            }).catch(err => console.log(err));
    }
    const fetchListItems = async (path) => {
        setIsLoading(true);
        const { data } = await axios(`${baseApiUri}/admin/${path}/list`);
        setListItems(data);
        setIsLoading(false);
    }
    useEffect(() => {
        console.log('useeffect');
        fetchListItems(typesEqualUriParams[activeType]);
    }, [activeType]);
    return (
        <div className="flex flex-col bg-gray-200 min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/*  Page content */}
            <main className="flex-grow">
                <section>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 flex flex-col items-center pb-12 md:pt-40 md:pb-20">
                            <AdminLoanTypeSelector activeType={activeType} handleClick={handleClick} />
                            {/* LIST COMPONENT */}
                            {
                                isLoading ?
                                    <div>Loading...</div>
                                    :
                                    <>
                                        {
                                            listItems.map((item) => {
                                                return <LoanList setSelectedLoan={setSelectedLoan} setShowDetailModal={setShowDetailModal} key={item.productId} listItem={item} />
                                            })
                                        }
                                    </>
                            }
                            {
                                showDetailModal &&
                                <LoanEditModal updateLoanDetail={updateLoanDetail} setShowDetailModal={setShowDetailModal} selectedLoan={selectedLoan} />
                            }
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Admin;