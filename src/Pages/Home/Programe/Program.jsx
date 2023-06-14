import Container from "../../../Shared/Container";
import { FaAngleRight } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

const Program = () => {
    return (
        <Container>

            <h3 className="text-3xl font-primary font-bold text-center">Our Special Program</h3>
            <Fade delay={1e3}>
                <div className="lg:grid grid-cols-3 gap-5 mt-10">
                    <div className="card mt-5 lg:w-96 mx-auto bg-base-100 shadow-lg">
                        <figure><img className="h-64" src="https://i.ibb.co/TmRBB4J/child-spending-time-comfortable-home.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Preschool</h2>
                            <p className="text-gray-500">Welcome to our Music Instrument Class, where your child can embark on a musical journey filled with joy, creativity, and the love of music!</p>
                            <div className="flex text-orange-500 cursor-pointer">
                                <span>Read More <FaAngleRight className="inline-block"></FaAngleRight></span>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-5 lg:w-96 bg-base-100 shadow-lg">
                        <figure><img className="h-64" src="https://i.ibb.co/zSV6XR2/istockphoto-641755794-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Schoolers</h2>
                            <p className="text-gray-500">Students can dive into the captivating world of music and embark on an exciting musical journey! Our program is designed to provide school-age children with a comprehensive music education.</p>
                            <div className="flex text-orange-500 cursor-pointer">
                                <span>Read More <FaAngleRight className="inline-block"></FaAngleRight></span>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-5 lg:w-96 bg-base-100 shadow-lg">
                        <figure><img className="h-64" src="https://i.ibb.co/b3nqL3t/Private-vs-Group-Music-Lessons.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Teenager</h2>
                            <p className="text-gray-500">Students can dive into the captivating world of music and embark on an exciting musical journey! Our program is designed to provide school-age children with a comprehensive music education.</p>
                            <div className="flex text-orange-500 cursor-pointer">
                                <span>Read More <FaAngleRight className="inline-block"></FaAngleRight></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Container>
    );
};

export default Program;