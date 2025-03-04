import React, { useState, useEffect } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // For the booking modal
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false); // For the disclaimer modal

  useEffect(() => {
    // Check localStorage for the last time the disclaimer was shown
    const lastShown = localStorage.getItem("disclaimerShownTime");
    const currentTime = new Date().getTime();

    if (!lastShown || currentTime - lastShown > 1 * 30 * 60 * 1000) {
      // If it's not set or more than 2 hours have passed, show the disclaimer
      setIsDisclaimerVisible(true);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setIsDisclaimerVisible(false); // Close the disclaimer modal
    // Set the current time in localStorage to prevent it from showing again in the next 2 hours
    localStorage.setItem("disclaimerShownTime", new Date().getTime().toString());
  };

  return (
    <div className="min-h-screen relative">
      {/* Dark overlay between image and text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/group-black-doctors-nurses-isolated-white-30058871.jpg')] bg-no-repeat bg-cover opacity-100 z-0"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
        {/* Disclaimer Modal */}
        {isDisclaimerVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-4/5 relative">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold text-black">Disclaimer</h2>
        <button onClick={handleDisclaimerClose} className="text-black text-2xl cursor-pointer">
          &times;
        </button>
      </div>
      <div className="modal-body mb-4 text-gray-700">
        <p className="text-lg leading-relaxed">
          This website is for demonstration purposes only. It is not intended to provide real medical services. All information provided is general in nature and should not be considered as professional medical advice.
        </p>
      </div>
      <div className="modal-footer text-center text-sm text-gray-500">
        Powered by © Aflu Med
      </div>
    </div>
  </div>
)}


        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to Aflu Med
          </h1>
          <p>
            We provide tools that empower healthcare professionals to deliver efficient, cost-effective, profitable, and patient-centered care. Our innovative solutions streamline workflows, reduce administrative burdens, and enhance communication between caregivers and patients. By leveraging technology, we enable healthcare providers to improve outcomes, increase productivity, and focus on what matters most – the well-being of their patients.
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

          {/* Booking Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-4/5 relative">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="text-lg font-bold text-black">
                    Book an Appointment with Dr. Standard EHR
                  </h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-black text-xl cursor-pointer">
                    &times;
                  </button>
                </div>

                <div className="modal-body my-4 p-0" style={{ position: "relative" }}>
                  <iframe
                    className="w-full h-96"
                    src="https://www.healthspace.co.za/cgi-bin/healthspace/calendar.pl?049054049048052052057050053050053053050"
                    title="Booking Window"
                    style={{
                      pointerEvents: "all",
                      zIndex: 1000, // Ensure iframe is on top
                    }}
                  ></iframe>
                </div>

                <div className="modal-footer text-gray-500 text-sm text-center">
                  Powered by © Healthspace.co.za
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
