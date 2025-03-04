import React from "react";


const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Founded and registered in 2014 under the South African Companies Act 71 of 2008 as a proprietary limited company, by Lubabalo James Mnyaka, a Medical Microbiologist, and an award-winning health-tech entrepreneur. Aflu Med Healthcare represents a pivotal advancement in healthcare technology, addressing the critical need for comprehensive electronic health records and practice management systems in Africa. 
        </p>
        <p className="text-justify lg:text-start">
  Our team of skilled doctors provides high-quality care, ensuring every patient receives tailored treatment. We focus on combining medical expertise with compassionate care to meet the unique needs of each individual. By offering advanced medical services, we aim to improve health and well-being for all our patients.
</p>
<p className="text-justify lg:text-start">
  Our healthcare professionals are committed to delivering the best possible outcomes through innovation and dedication. With a patient-centered approach, we offer comprehensive care that supports both physical and mental health. We ensure that our patients receive the attention and care they deserve, fostering long-term wellness.
</p>

      </div>
      <div className=" w-full lg:w-3/4">
      <img
  className="rounded-lg w-full h-auto" // Adjust width to full and maintain aspect ratio
  src={'https://th.bing.com/th/id/OIP.oxAv1EIolFE7Rlu4IQqH4QHaE7?w=291&h=193&c=7&r=0&o=5&pid=1.7'}
  alt="img"
/>

      </div>
    </div>
  );
};

export default About;
