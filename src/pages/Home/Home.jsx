import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner'
import Faq from '../../components/Faq/Faq';
import Featured from '../../components/Featured/Featured';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FoodUnity | Home</title>
            </Helmet>
            <Banner />
            <Featured />
            <Feedback />
            <Faq />
        </div>
    );
};

export default Home;