import React from "react";
import gplay from "./assets/images/gplay.png";
import appstore from "./assets/images/appstore.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white text-black ">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="md:ml-10">
            <h3 className="font-bold mb-2 ">Company</h3>
            <ul>
              <li>About</li>
              <li>Facilities</li>
              <li>Career</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Activities</h3>
            <ul>
              <li>Art Gallery</li>
              <li>Workshops</li>
              <li>Outdoor Activities</li>
              <li>Media Coverage</li>
              <li>Art Events</li>
              <li>Exhibition</li>
              <li>Daily Activities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Popular Course</h3>
            <ul>
              <li>Diploma In Fine Arts</li>
              <li>Certificate Hobby Course</li>
              <li>Entrance Preparation BFA</li>
              <li>Animation Sketching</li>
              <li>Kids Diploma</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Our Locations</h3>
            <ul>
              <li>Gurgaon (DLF Phase-4)</li>
              <li>Mumbai (Andheri West)</li>
              <li>South Delhi (Kailash Colony)</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-4 flex justify-between items-center">
          <div className="flex space-x-4 md:mr-32 mt-10"></div>
          <div className="flex space-x-4">
            {/* second div */}
            <div className=" p-1">
              <h1>Download The App</h1>
              <br />
              <button className="flex md:mt-1">
                <img src={gplay} className="h-[40px]" alt="" />
              </button>
            </div>
            <div className=" md:p-7 p-6 mt-7">
              <button className="flex  ml-[-70px]">
                <img className="h-[40px]" src={appstore} alt="" />
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className=" md:ml-10 md:mt-[-200px]">
          {/* first div */}
          <p className="font-bold">NIFA Is A Unit Of Nifaedutech Pvt Ltd..</p>
          <p className="font-bold">Connect With Us</p>
          <p>9555112200,9810130552</p>
          <p>admission@nifafinearts.com</p>
        </div>
        <br />
        <div className="flex flex-row items-center  md:ml-10 space-x-4 ">
          <div className="flex flex-row ">
            <a href="" className="text-red-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 "
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            <a href="" className="text-gray-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 ml-2"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 2.89c-0.81 0.36-1.68 0.61-2.6 0.72 0.94-0.56 1.66-1.44 2-2.49-0.88 0.52-1.86 0.89-2.91 1.09-0.83-0.89-2.01-1.45-3.31-1.45-2.51 0-4.54 2.03-4.54 4.54 0 0.36 0.04 0.71 0.11 1.05-3.77-0.19-7.12-2-9.38-4.76-0.39 0.67-0.61 1.45-0.61 2.27 0 1.57 0.8 2.96 2.01 3.78-0.74-0.02-1.43-0.23-2.03-0.58v0.06c0 2.2 1.57 4.04 3.64 4.45-0.38 0.1-0.78 0.15-1.19 0.15-0.29 0-0.57-0.03-0.85-0.08 0.57 1.78 2.23 3.07 4.19 3.1-1.54 1.21-3.47 1.94-5.56 1.94-0.36 0-0.72-0.02-1.07-0.06 1.99 1.28 4.37 2.02 6.91 2.02 8.29 0 12.84-6.88 12.84-12.83 0-0.19 0-0.38-0.01-0.57 0.88-0.64 1.64-1.44 2.24-2.36z" />
              </svg>
            </a>

            <a href="" className="text-gray-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 ml-2"
                fill="none"
                stroke="pink"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="16" height="16" x="4" y="4" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
              </svg>
            </a>

            <a href="" className="text-gray-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 ml-2"
                fill="none"
                stroke="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.57 12l-17.51 9.88c-0.75 0.42-1.71-0.11-1.71-0.94v-19.76c0-0.83 0.96-1.36 1.71-0.94l17.51 9.88c0.75 0.42 0.75 1.12 0 1.54z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <a href="https://api.whatsapp.com/send?phone=919555112200">
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-ico"
          style={{
            fill: "white",
            width: "50px",
            height: "50px",
            padding: "3px",
            backgroundColor: "#4dc247",
            borderRadius: "50%",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.4)",
            position: "fixed",
            bottom: "50px",
            right: "20px",
            zIndex: 10,
          }}
        >
          <path
            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
            fillRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
