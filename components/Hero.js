import { HiArrowNarrowRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <header className="hidden md:grid grid-cols-2 py-4 px-6 md:px-14 z-10 items-center absolute max-w-7xl w-full">
        <div className="flex space-x-10 items-center">
          <Link href="/">
            <a className="w-20 md:w-24 lg:w-32 cursor-pointer">
              <img src="/logo2.png" alt="" />
            </a>
          </Link>

          <Link href="/#about">
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">About</span>
            </a>
          </Link>

          <Link href={"/systems?sys=all"}>
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Systems</span>
            </a>
          </Link>
          <Link href="/blog">
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Blog</span>
            </a>
          </Link>
        </div>
        <Link href="/contact">
          <a className="hidden md:flex ml-auto items-center text-white px-8 py-4 bg-ffsgPink rounded-lg space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold">
            <p>Contact us</p>
            <FiArrowUpRight size="1.3em" />
          </a>
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="mt-28 md:mt-40 lg:mt-56 items-center px-6 md:px-14">
          <div className="space-y-6 md:space-y-10 max-w-md">
            <h2 className="font-semibold text-3xl md:text-5xl md:leading-normal leading-snug text-center md:text-left">
              Build A Sensory Gym You Can Be Proud Of
            </h2>
            <p className="font-light text-gray-500 leading-relaxed">
              Fun Factory Sensory Gym is the inventor of the custom designed
              indoor sensory gym. Our sensory gyms are designed to accomodate
              the needs of children, parents, and healthcare professionals. We
              are the only company in the world insured and bonded to our
              sensory gym installations.
            </p>
          </div>

          <div className="flex items-center space-x-5 mt-6 md:mt-10 lg:mt-16">
            <Link href="/contact">
              <a className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-ffsgPink text-white rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold">
                <p>Free Consultation</p>
                <HiArrowNarrowRight size="1.3em" />
              </a>
            </Link>

            <Link href="/#process">
              <a className="relative nav hover:text-ffsgPink cursor-pointer text-sm md:text-base transition-all duration-200">
                <span className="nav-link">Our Process</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Slider {...settings}>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample.mp4" type="video/mp4" />
            </video>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample2.mp4" type="video/mp4" />
            </video>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample3.mp4" type="video/mp4" />
            </video>
            {/* <img
              src="/hero.png"
              alt=""
              className="h-[30rem] md:h-[96vh] w-full object-cover"
            /> */}
          </Slider>

          <div className="md:hidden absolute bottom-5 left-0 right-0 mx-5 mt-14">
            <div className="flex items-center justify-between px-6 py-4 bg-white">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-bold text-2xl">
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <p>
                          {isVisible ? (
                            <CountUp start={1} end={550000} duration={3} />
                          ) : null}
                          +
                        </p>
                      )}
                    </VisibilitySensor>
                  </div>
                  <p className="text-sm">Children</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <div className="font-bold text-2xl">
                    <VisibilitySensor partialVisibility>
                      {({ isVisible }) => (
                        <p>
                          {isVisible ? (
                            <CountUp start={1} end={4400} duration={3} />
                          ) : null}
                          +
                        </p>
                      )}
                    </VisibilitySensor>
                  </div>
                  <p className="text-sm">Installation Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
