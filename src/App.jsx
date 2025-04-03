import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Workout from "./components/Workout/Workout";
import GymSlider from "./components/GymSlider/GymSlider";
import Diet from "./components/Diet/Diet";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Individual_Warmups from "./components/Individual_Warmups/Individual_Warmups";

function App() {
  return (
    <>
      <Header />
      <div id="main">
        <Main />
      </div>
      <div className="divider"></div>
      <div id="workout-set">
        <Workout />
      </div>
      <div id="individual-workout">
        <Individual_Warmups />
      </div>
      <div className="divider"></div>
      <div id="gym">
        <GymSlider />
      </div>
      <div className="divider"></div>
      <div id="diet">
        <Diet />
      </div>
      <div className="divider"></div>
      <div id="calculator">
        <Calculator />
      </div>
      <div className="divider"></div>
      <div id="slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          loop={true}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <div className="div-slider">
            <SwiperSlide>
              <a
                href="https://www.nike.com/ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/swiper/nikelogo.svg"
                  className="slider-el"
                  alt="Nike"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.adidas.com/us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/swiper/adidaslogo.svg"
                  className="slider-el"
                  alt="Adidas"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://about.puma.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/swiper/pumalogo.svg"
                  className="slider-el"
                  alt="Puma"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.newbalance.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/swiper/nblogo.svg"
                  className="slider-el"
                  alt="New Balance"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.reebok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/swiper/reeboklogo.svg"
                  className="slider-el"
                  alt="Reebok"
                />
              </a>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div id="footer">
        <Footer></Footer>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
