import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import foodMenu1 from "../assets/food-1.jpg";
import foodMenu2 from "../assets/food-2.jpg";
import foodMenu3 from "../assets/food-3.jpg";

const Home = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section id="home" className="home py-16 bg-white">
      {/* Search Form */}
      {searchOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 shadow-lg rounded-lg w-80">
            <input
              type="search"
              placeholder="Search here..."
              className="border p-2 outline-none rounded-md w-full"
            />
            <button className="absolute right-4 top-3 text-gray-500" onClick={() => setSearchOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Swiper Slider */}
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="home-slider w-full">
        {/* Slide 1 */}
        <SwiperSlide className="slide flex flex-col md:flex-row items-center md:items-start gap-2 p-12">
          <div className="content flex-1 text-left md:pl-40 mt-16">
            <span className="text-green-600 text-3xl font-semibold">Our Special Dish</span>
            <h3 className="text-black text-5xl md:text-7xl font-bold mt-4">Spicy Noodles</h3>
            <p className="text-gray-600 text-xl mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="mt-6 inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-800 text-lg">
              Order Now
            </a>
          </div>
          <div className="image flex-1 flex justify-end self-start transform -translate-y-64"> {/* Adjusted to move image up more */}
            <img src={foodMenu1} alt="Spicy Noodles" className="w-[550px] h-[450px] object-cover rounded-lg shadow-lg" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="slide flex flex-col md:flex-row items-center md:items-start gap-2 p-12">
          <div className="content flex-1 text-left md:pl-40 mt-16">
            <span className="text-green-600 text-3xl font-semibold">Our Special Dish</span>
            <h3 className="text-black text-5xl md:text-7xl font-bold mt-4">Fried Chicken</h3>
            <p className="text-gray-600 text-xl mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="mt-6 inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-800 text-lg">
              Order Now
            </a>
          </div>
          <div className="image flex-1 flex justify-end self-start transform -translate-y-64"> {/* Adjusted to move image up more */}
            <img src={foodMenu2} alt="Fried Chicken" className="w-[550px] h-[450px] object-cover rounded-lg shadow-lg" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="slide flex flex-col md:flex-row items-center md:items-start gap-2 p-12">
          <div className="content flex-1 text-left md:pl-40 mt-16">
            <span className="text-green-600 text-3xl font-semibold">Our Special Dish</span>
            <h3 className="text-black text-5xl md:text-7xl font-bold mt-4">Hot Pizza</h3>
            <p className="text-gray-600 text-xl mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="mt-6 inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-800 text-lg">
              Order Now
            </a>
          </div>
          <div className="image flex-1 flex justify-end self-start transform -translate-y-64"> {/* Adjusted to move image up more */}
            <img src={foodMenu3} alt="Hot Pizza" className="w-[550px] h-[450px] object-cover rounded-lg shadow-lg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;