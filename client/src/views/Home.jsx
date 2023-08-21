import Banner from "../components/Home/Banner";
import FeaturesHome from "../components/Home/Features";
import FeaturesBlocks from "../components/Home/FeaturesBlocks";
import Galery from "../components/Home/Galery";
import HeroHome from "../components/Home/HeroHome";
import Newsletter from "../components/Home/Newsletter";
import Testimonials from "../components/Home/Testimonials";
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <FeaturesBlocks />
                <Galery />
                <HeroHome />
                <FeaturesHome />
                <Testimonials />
                <Newsletter />

            </main>
            <Banner />
            <Footer />
            {/*  Site footer */}

        </div>
    );
}

export default Home;