import InstructorSection from '../InstructorSection/InstructorSection';
import PopularClassSection from '../PopularClassSection/PopularClassSection';
import Program from '../Programe/Program';
import Banner from './../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClassSection></PopularClassSection>
            <InstructorSection></InstructorSection>
            <Program></Program>
        </div>
    );
};

export default Home;