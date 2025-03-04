import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "https://th.bing.com/th/id/OIP.yvrquhHDVezbwA4m5mXl3QHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Zack Daniels",
      specialties: "Diabetic Manager",
    },
    {
      img: "https://th.bing.com/th/id/OIP.4JLvriGyr3zPrSBMcHxMfQHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "https://th.bing.com/th/id/OIP.0VDNAnx6IfaAciaVIwG2jgHaE7?w=269&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Naledi Mokwena",
      specialties: "Pediatrician",
    },
    {
      img: "https://th.bing.com/th/id/OIP.6YiZB2e8aoJuLUBj38B7UwHaEK?w=256&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Nkosi Mabuza",
      specialties: "Neurologist",
    },
    {
      img: "https://th.bing.com/th/id/OIP.l4gjJ_v5pAZFIfPgs68WpAHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Oratile Mokwena",
      specialties: "Dermatologist",
    },
    {
      img: "https://th.bing.com/th/id/OIP.SFS6hu5YqaPSf-JiqzcEgwHaE7?w=216&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Dr. Mpho Mabena",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Our highly qualified team of doctors.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
        <button
  className="bg-[rgba(25,181,241,0.7)] text-white px-4 py-2 rounded-lg active:bg-[rgba(25,181,241,0.9)] hover:bg-[rgba(25,181,241,1)] transition-all"
  onClick={() => slider.current.slickPrev()}
>
  <FaArrowLeft size={25} />
</button>
<button
  className="bg-[rgba(25,181,241,0.7)] text-white px-4 py-2 rounded-lg active:bg-[rgba(25,181,241,0.9)] hover:bg-[rgba(25,181,241,1)] transition-all"
  onClick={() => slider.current.slickNext()}
>
  <FaArrowRight size={25} />
</button>

        </div>
      </div>
      <div className=" mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" h-56 rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
