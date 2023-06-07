import InstructorSection from '../InstructorSection/InstructorSection';
import PopularClassSection from '../PopularClassSection/PopularClassSection';
import Banner from './../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClassSection></PopularClassSection>
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default Home;