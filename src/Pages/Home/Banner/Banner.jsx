import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
                <SwiperSlide><img className="w-full object-cover h-[500px]" src="https://i.ibb.co/6WC0S6q/simon-weisser-ph-S37wg8c-Qg-unsplash.jpg" />

                    <BannerText></BannerText>
                </SwiperSlide>
                <SwiperSlide><img className="w-full object-cover h-[500px]" src="https://i.ibb.co/47z7zQj/brent-ninaber-m-Ln-G4-Bk-Tz54-unsplash.jpg" />
                    <BannerText></BannerText>

                </SwiperSlide>
                <SwiperSlide><img className="w-full object-cover h-[500px]" src="https://i.ibb.co/pWv6MTw/ebuen-clemente-jr-H5-Iw3-Xz0vx-M-unsplash.jpg" />
                    <BannerText></BannerText>
                </SwiperSlide>
                <SwiperSlide><img className="w-full object-cover h-[500px]" src="https://i.ibb.co/wy0MdPq/lucia-macedo-d9-2k-PJBG0-U-unsplash.jpg" />
                    <BannerText></BannerText>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;