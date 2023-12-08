import React from "react";

import a from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nifalogo from "./assets/images/nifalogo.png";
import crousal1 from "./assets/images/crousal1.jpg";
import crousal2 from "./assets/images/crousal2.jpg";
import crousal3 from "./assets/images/crousal3.jpg";
import crousal4 from "./assets/images/crousal4.jpg";
import crousal5 from "./assets/images/crousal5.jpg";
import gplay from "./assets/images/gplay.png";
import appstore from "./assets/images/appstore.png";
import img1 from "./assets/images/imgmtr1.jpg";
import img2 from "./assets/images/imgmtr2.jpg";
import img3 from "./assets/images/imgmtr3.jpg";
import img4 from "./assets/images/imgmtr4.jpg";
import img5 from "./assets/images/imgmtr5.jpg";
import img6 from "./assets/images/imgmtr6.jpg";
import img7 from "./assets/images/imgmtr7.jpg";
import img8 from "./assets/images/imgmtr8.jpg";
import img9 from "./assets/images/imgmtr9.jpg";
import img10 from "./assets/images/imgmtr10.jpg";
import img11 from "./assets/images/imgmtr11.jpg";
import img12 from "./assets/images/imgmtr12.jpg";
import img13 from "./assets/images/imgmtr13.jpg";
import img14 from "./assets/images/imgmtr14.jpeg";
import img15 from "./assets/images/imgmtr15.jpeg";
import img16 from "./assets/images/imgmtr16.jpeg";
import img17 from "./assets/images/imgmtr17.jpg";
import img18 from "./assets/images/imgmtr18.jpeg";
import img19 from "./assets/images/imgmtr19.jpg";
import img20 from "./assets/images/imgmtr20.jpeg";
import img21 from "./assets/images/imgmtr21.jpeg";
import img22 from "./assets/images/imgmtr22.jpg";
import img23 from "./assets/images/img23.jpg";
import img24 from "./assets/images/img24.jpg";
import img25 from "./assets/images/img25.jpg";
import img26 from "./assets/images/img26.jpg";
import img27 from "./assets/images/img27.jpg";
import img28 from "./assets/images/img28.jpg";
import img29 from "./assets/images/img29.jpg";
import img30 from "./assets/images/img30.jpg";
import img31 from "./assets/images/img31.jpg";
import img32 from "./assets/images/img32.jpg";
import img33 from "./assets/images/img33.jpg";
import img34 from "./assets/images/img34.jpg";

const cardData = [
  {
    img: img23,
    description:
      "6 Months Diploma in Sketching & Oil Painting - Regular/Part time",
  },
  {
    img: img24,
    description: "1 to 3 Months Certificate Hobby Course (Regular and Weekend)",
  },
  {
    img: img25,
    description: "One Year Diploma in Fine Arts-Regular/Part Time-Level-3",
  },
  {
    img: img26,
    description: "Two years Advance Diploma in Fine Arts - Regular/Part time",
  },
  {
    img: img27,
    description: "Entrance Preparation For N.I.D",
  },
  {
    img: img28,
    description: "B.F.A from UGC Recognised University",
  },
  {
    img: img29,
    description: "M.A in Painting from UGC Recognised University",
  },
  {
    img: img30,
    description: "Entrance preparation for B.F.A",
  },
  {
    img: img31,
    description: "Kids 1 year Diploma (Level-1)",
  },
  {
    img: img32,
    description: "Kids 1 year Diploma (Level-2)",
  },
  {
    img: img33,
    description: "Entrance Preparation for NIFT",
  },
  {
    img: img34,
    description: "3 Months Hobby Certificate Course For Kids",
  },
];

export default function Header() {
  const [isListVisible, setListVisibility] = useState(false);

  const toggleList = () => {
    setListVisibility(!isListVisible);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const PrevArrow = (props) => (
    <button
      {...props}
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );

  const NextArrow = (props) => (
    <button
      {...props}
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>
      <header className="bg-gradient-to-r from-purple-800 to-pink-700 text-white p-1">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center mb-[10px]">
            <h1 className="text-[15px] text-center md:ml-20">
              Welcome to the National Institute of Fine Arts
            </h1>
          </div>
          <div className="flex items-center md:ml-32 mb-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-xs text-center mb-15">
                <svg
                  className="h-4 w-4 inline-block mr-1 font-bold"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                65656656555
              </span>

              <span className="text-xs text-center mt-15 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                65656656555
              </span>
            </div>
          </div>
          <div className="flex items-center  mb-[10px]">
            <span className="text-xs text-center mt-15 ml-2">
              <svg
                className="h-4 w-4 inline-block mr-1"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span></span> admission@nifafinearts.com
            </span>
          </div>

          <div className="flex items-center  mb-[10px]">
            <h1 className="text-xs text-center md:ml-20"></h1>
          </div>

          <div className="flex items-center space-x-4 md:mr-10">
            <a href="" className="  text-red-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 p-1"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            <a href="" className="text-gray-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 p-1"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 2.89c-0.81 0.36-1.68 0.61-2.6 0.72 0.94-0.56 1.66-1.44 2-2.49-0.88 0.52-1.86 0.89-2.91 1.09-0.83-0.89-2.01-1.45-3.31-1.45-2.51 0-4.54 2.03-4.54 4.54 0 0.36 0.04 0.71 0.11 1.05-3.77-0.19-7.12-2-9.38-4.76-0.39 0.67-0.61 1.45-0.61 2.27 0 1.57 0.8 2.96 2.01 3.78-0.74-0.02-1.43-0.23-2.03-0.58v0.06c0 2.2 1.57 4.04 3.64 4.45-0.38 0.1-0.78 0.15-1.19 0.15-0.29 0-0.57-0.03-0.85-0.08 0.57 1.78 2.23 3.07 4.19 3.1-1.54 1.21-3.47 1.94-5.56 1.94-0.36 0-0.72-0.02-1.07-0.06 1.99 1.28 4.37 2.02 6.91 2.02 8.29 0 12.84-6.88 12.84-12.83 0-0.19 0-0.38-0.01-0.57 0.88-0.64 1.64-1.44 2.24-2.36z" />
              </svg>
            </a>

            <a href="" className="text-gray-300 hover:text-gray-100">
              <svg
                className="h-6 w-6 p-1"
                fill="none"
                stroke="white"
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
                className="h-6 w-6 p-1"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.57 12l-17.51 9.88c-0.75 0.42-1.71-0.11-1.71-0.94v-19.76c0-0.83 0.96-1.36 1.71-0.94l17.51 9.88c0.75 0.42 0.75 1.12 0 1.54z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <nav className="bg-white p-2 ">
        <div className="container mx-auto flex justify-between items-center">
          <a href="" className="text-white ">
            <img src={nifalogo} alt="" className="h-12  md:ml-20" />
          </a>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <ul
            className={`lg:flex lg:space-x-4  md:mr-16 text-black ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300">Courses</a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Activities
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Admission
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Art Gallery
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Franchise
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Online Classes
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Videos
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Pay Fee
              </a>
            </li>
            <li>
              <a href="" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <nav>
          <div className="mx-auto border-1  max-w-screen-md md:mt-[-40px]">
            <div className="text-center md:hidden border-1 border-black ">
              <select className=" bg-blue-500 list-none p-0 w-[80%] mt-[-20px]">
                <option value="">Home</option>
                <option>About</option>
                <option>Facilities</option>
                <option>Courses</option>
                <option>B.F.A from UGC Recognised University</option>
                <option>M.A from UGC Recognised University</option>
                <option>Two years Advance Diploma in Fine Arts</option>
                <option>One Year Diploma in Fine Arts</option>
                <option>6 Months Diploma in Fine Arts</option>
                <option>Entrance Preparation For N.I.D</option>
                <option>Entrance Preparation for NIFT</option>
                <option>Animation Sketching</option>
                <option>Entrance Preparation for B.F.A</option>
                <option>1 to 3 Months Certificate Hobby Course</option>
                <option>Kids Diploma (L-2)</option>
                <option>Kids Diploma (L-1)</option>
                <option>Hobby Certificate Course For Kids</option>
                <option>Workshops</option>
                <option>Outdoor</option>
                <option>National Art Seminar & Award Show, 2018</option>
                <option>Media Coverage</option>
                <option>Judging Art Events</option>
                <option>Exhibition</option>
                <option>Daily Activities</option>
                <option>Addmission</option>
                <option>Art Gallery</option>
                <option>Work by Kids Level-2</option>
                <option>Work by Kids Level-1</option>
                <option>Sketching</option>
                <option>Paintings done by Students of Level-3</option>
                <option>Online Classes</option>
                <option value="">Franchise</option>
                <option>Videos</option>
                <option>Pay Fee</option>
                <option>Contact</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
      <br />

      <Slider {...settings} className="rounded-xl">
        <div>
          <img
            src={crousal1}
            className="h-full w-full object-cover"
            alt="carousel 1"
          />
        </div>
        <div>
          <img
            src={crousal2}
            className="h-full w-full object-cover"
            alt="carousel 2"
          />
        </div>
        <div>
          <img
            src={crousal3}
            className="h-full w-full object-cover"
            alt="carousel 3"
          />
        </div>
        <div>
          <img
            src={crousal4}
            className="h-full w-full object-cover"
            alt="carousel 4"
          />
        </div>
        <div>
          <img
            src={crousal5}
            className="h-full w-full object-cover"
            alt="carousel 5"
          />
        </div>
      </Slider>
      <br />
      <div className="flex flex-col md:flex-row space-x-8 md:space-x-0 md:space-y-8">
        <div className="md:mr-8">
          <div className="p-5  whitespace-nowrap">Nifa Updates::</div>
        </div>

        <marquee className="flex-0.8 md:mb-8 text-pink-600">
          All NIFA courses are now available worldwide through our Live and
          Interactive Online Classes. Please download the NIFA app from our
          online classes page to register for a complimentary trial class.
        </marquee>

        <div className="flex-1">
          <div className="mr-16"></div>
        </div>
      </div>
      <br />
      <br />
      <div className="mx-8  text-center">
        <h1 className="text-[36px] mt-0 font-lexend font-semibold">
          {" "}
          Welcome To National Institute of Fine Arts
        </h1>
        <p className="text-[17px] leading-6 md:mx-[130px]">
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>

        <p className="mt-3 text-[17px] leading-6 md:mx-[130px]">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>
        <p className="mt-3 font-semibold md:mx-[150px]">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes.
        </p>
        <br />
        <button className="text-center md:ml-0 text-black border-2 rounded-full border-black p-2 w-36 bg-gradient-to-r from-purple-800 to-pink-700 text-white">
          Read More
        </button>
      </div>
      <br />
      <br />
      <div
        className="bg-red-300 text-white bg-fixed flex flex-col md:flex-row space-y-5 md:space-x-2"
        style={{
          backgroundImage: 'url("./assets/images/phonebgimage.avif")', // Replace with the path to your image
        }}
      >
        <div className="p-1 md:w-[500px] md:ml-32 ">
          <h1 className="text-2xl">Online Classes</h1>
          <p className="text-sm text-white">
            Dear Students/Parents, Nifa presents its Learning App for your
            regular art practice in which we have added many amazing features
            Like: Step-by-step recorded demo videos prepared by your faculty
            members. Regular assessment of your practice through the assignment
            section. Live class section from the same app. Attendance, payment
            invoice, art news, announcements, important information, and direct
            connect with the management team are some more features.
          </p>
          <p>
            So hurry up and join now to experience personalized coaching by
            experts sitting at your home.
          </p>
          <p>We wish you Happy Learning. Stay Safe and Healthy.</p>
          <br />
          <button className="md:ml-[9px] text-center md:ml-0 text-black border-2 rounded-full border-black p-2 w-36 bg-gradient-to-r from-purple-800 to-pink-700 text-white">
            Read More
          </button>
          <br />
          <br />
          <h1>Download The App</h1>

          <div className="flex mt-2">
            <button className="flex ">
              <img src={gplay} className="h-[40px]" alt="" />
            </button>
            <button className="flex md:ml-3 ">
              <img className="h-[40px]" src={appstore} alt="" />
            </button>
          </div>
        </div>

        <div className="pt-5 pr-5 pl-[-5px] pb-[-50px] bg-white ">
          <div className="md:w-1/2 md:ml-3 md:mb-1 md:ml-[28px] ">
            <iframe
              src="https://www.youtube.com/embed/-9cJjaLXKqE"
              title="NIFA ( Best Art Institute )"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full mb-[-10px] md:w-[630px] md:h-[440px]"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl text-center">
          Our Courses
        </h1>
        <div className="flex flex-wrap justify-center">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="block rounded-lg bg-white shadow-md dark:bg-neutral-700 transition-transform transform hover:scale-105">
                <a href="#!">
                  <img
                    className="rounded-t-lg w-full h-auto"
                    src={card.img}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {card.description}
                  </p>
                  <button className="ml-[25px] text-center text-black border-2 rounded-full border-black p-2 w-36 bg-gradient-to-r from-purple-800 to-pink-700 text-white">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-white-700 text-teal lg:p-12 ">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Students Work
          </h1>
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 lg:mt-10">
            <img
              src={img1}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxWidth: "190px",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img2}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxWidth: "190px",
                maxHeight: "250px",
              }}
              className="lg:mb-0"
            />
            <img
              src={img3}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxWidth: "190px",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
            <img
              src={img4}
              alt="img"
              s
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "190px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
            <img
              src={img5}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxWidth: "400px",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 my-4 lg:my-10">
            <img
              src={img6}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "460px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img7}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "210px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img8}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img9}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "160px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="lg:mb-0"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 my-4 lg:my-10">
            <img
              src={img10}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "330px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
            <img
              src={img11}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "240px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
            <img
              src={img12}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "160px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="lg:mb-0"
            />
            <img
              src={img13}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className=" lg:mb-0"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 my-8 lg:my-10">
            <img
              src={img14}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "200px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img15}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img16}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "140px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img17}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "160px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img18}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "320px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-4 my-8 lg:my-10">
            <img
              src={img19}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "240px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img20}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "240px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img21}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "240px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
            <img
              src={img22}
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px",
                objectFit: "cover",
                verticalAlign: "bottom",
                borderRadius: "1vmin",
                maxHeight: "250px",
              }}
              className="mb-6 lg:mb-0"
            />
          </div>
          <style jsx>{`
            @media (max-width: 767px) {
              img {
                width: 100%;
                max-width: none;
                height: auto;
                max-height: 250px; /* Adjust as needed */
              }
            }
          `}</style>
        </div>
      </div>
      <div className="bg-red-200">
        <div className="container mx-auto md:w-[80%] p-10 m-10 ">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Student's Testimonial
          </h1>
          <br />
          <div className="xl:grid xl:grid-cols-3 xl:gap-4 xl:mt-4 ">
            <div className="aspect-w-16 aspect-h-20 bg-white p-1">
              <iframe
                className="w-full h-[150px] "
                src="https://www.youtube.com/embed/EnYCmNGoySc"
                title="YouTube Video 1"
                allowFullScreen
              />
            </div>

            <div className="aspect-w-16 aspect-h-16 mt-4 xl:mt-0 bg-white p-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iX6KgBTH__E"
                title="YouTube Video 2"
                allowFullScreen
              />
            </div>

            <div className="aspect-w-16 aspect-h-16 mt-4 xl:mt-0 bg-white p-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hvjJv1zVl2k"
                title="YouTube Video 3"
                allowFullScreen
              />
            </div>

            <div className="aspect-w-16 aspect-h-16 mt-4 xl:mt-0 bg-white p-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GfialCtEAYk"
                title="YouTube Video 4"
                allowFullScreen
              />
            </div>

            <div className="aspect-w-16 aspect-h-16 mt-4 xl:mt-0 bg-white p-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/S5AUDt6999o"
                title="YouTube Video 5"
                allowFullScreen
              />
            </div>

            <div className="aspect-w-16 aspect-h-16 mt-4 xl:mt-0 bg-white p-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/S5AUDt6999o"
                title="YouTube Video 6"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
}
