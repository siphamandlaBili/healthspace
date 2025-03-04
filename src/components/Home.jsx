import React, { useState } from "react";
import Button from "../layouts/Button";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        {/* Open Modal Button */}
        <button
          id="myBtn"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Book An Appointment with Dr. Standard EHR
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/2">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-bold text-black">
                  Book an Appointment with Dr. Standard EHR
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-black text-xl cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body my-4">
                <iframe
                  className="w-full h-96"
                  src="https://www.healthspace.co.za/cgi-bin/healthspace/calendar.pl?049054049048052052057050053050053053050"
                  title="Booking Window"
                ></iframe>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer text-gray-500 text-sm text-center">
                Powered by © Healthspace.co.za
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
