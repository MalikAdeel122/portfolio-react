import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Modal from "../component/Modal.js";
import { Pagination } from "swiper/modules";
import { FaDesktop, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { MdDesignServices, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { SiAdobeillustrator } from "react-icons/si";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { HiArrowDownTray } from "react-icons/hi2";
import { BsBraces } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Project } from "../Menu.js";
const Home = () => {
  const service = [
    {
      id: 1,
      icon: <MdDesignServices />,
      title: "UI/UX Designer",
      int: "I develop the user interface.",
      pWeb: "Web page development.",
      pcreate: "I create ux element interactions.",
      pbrand: " I position your company brand.",
    },
    {
      id: 2,
      icon: <RiExpandLeftRightLine />,
      title: "Frontend Developer",
      int: "I develop the user interface.",
      pWeb: "Web page development.",
      pcreate: "I create ux element interactions.",
      pbrand: " I position your company brand.",
    },
    {
      id: 3,
      icon: <FaPenToSquare />,
      title: "Graphic Designer",
      int: "I develop the user interface.",
      pWeb: "Web page development.",
      pcreate: "I create ux element interactions.",
      pbrand: " I position your company brand.",
    },
    {
      id: 4,
      icon: <SiAdobeillustrator />,
      title: "Adobe Illustrator",
      int: "I develop the user interface.",
      pWeb: "Web page development.",
      pcreate: "I create ux element interactions.",
      pbrand: " I position your company brand.",
    },
  ];
  const btn = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Web Apps",
      value: "Web Apps",
    },
    {
      label: "Games",
      value: "Games",
    },
    {
      label: "Designing",
      value: "Designing",
    },
  ];
  const [openView, setOpenView] = useState(false);
  // skill using state
  const [skill, setSKill] = useState(false);
  const [openFrontend, setOpenFrontend] = useState(false);
  // console.log("skill", openFrontend);
  // project state
  const [items, setItems] = useState(Project);
  const [activeTap, setActiveTap] = useState("All");
  const filteritem = (categItem) => {
    const updateData = Project.filter((curElem) => {
      return curElem?.category === categItem;
    });
    setItems(updateData);
    setActiveTap(categItem);
  };

  return (
    <>
      <div className="home">
        <div className="wrapper app-width">
          <div className="ls">
            <div className="text">
              <div className="welTxt">WelCome To My Word </div>
              <div className="nametxt">Hi I'm Adeel Nazeer</div>
              <div className="text_animation">
                <h2>Frontend Developer</h2>
              </div>
              <div className="user_detail">
                High level experience in web design and development knowledge,
                producing quality work.
              </div>
              <div class="btn-box">
                <Link to="" class="btn btn_hire">
                  Hire Me Now ! <i class="bx bx-right-arrow-alt"></i>
                </Link>
                <Link
                  to="/images/img/My_CV1Asset 4.pdf"
                  target="_blank"
                  class="btn d-CV"
                >
                  Download CV <HiArrowDownTray />
                  <i class="bx bx-download"></i>
                </Link>
              </div>
              <div className="social_link">
                <Link
                  to="https://www.facebook.com/profile.php?id=100073200212966"
                  className="social_icon"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.youtube.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/adeel-nazeer-95aaa5269/"
                  className="social_icon"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/malikadeel04/"
                  className="social_icon"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="rs">
            <img src="/images/img/hero.png" />
          </div>
        </div>
      </div>

      {/* about */}
      <div className="about" id="about">
        <div className="about_heading">
          <div className="heading_text">About Me</div>
          <div className="heading_intro">My Introducion</div>
        </div>
        <div className="wrapper app-width">
          <div className="ls">
            <div className="about_img">
              <img src="/images/img/course-2-1.jpg"></img>
            </div>
          </div>
          <div className="rs">
            <div className="about_text">
              <div className="head_text">
                3 Year's Experience on Product Design
              </div>
              <p className="about_detail">
                I am a professional Frontend developer and designer with more
                than 3 years of experience building websites for small and
                medium sized businesses. My specialties are websites creation,
                landing pages, WordPress security and maintenance, WordPress
                SEO, WordPress website clone, backup's and cloning, PSD, Figma
                and WordPress conversions, WordPress administrative and
                WordPress E-commerce stores fully optimized. I have been working
                with different businesses
              </p>
              <div class="btn-box">
                <Link
                  to="/images/img/My_CV1Asset 4.pdf"
                  target="_blank"
                  class="btn d-CV"
                >
                  Download CV <HiArrowDownTray />
                  <i class="bx bx-download"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skill */}

      <div className="skill_section" id="skill">
        <div className="skill_headingText">
          <div className="heading_text">Skills</div>
          <div className="heading_intro">My technical level</div>
        </div>
        <div className="wrapper app-width">
          <div className="container">
            <div class="wave">
              <div
                class="skill_btn"
                onClick={() => setOpenFrontend(!openFrontend)}
              >
                <div className="bar_icon">
                  <BsBraces />
                </div>
                <div class="label">
                  <h3 class="title">Frontend developer</h3>
                  <span class="subtitle">More than 2 years</span>
                </div>
                <div class="arrowupIcon">
                  <IoIosArrowUp />
                </div>
              </div>
              {openFrontend && (
                <div className="skill_content">
                  <ul class="skill-list">
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">HTML</span>
                        <span class="value">90%</span>
                      </div>
                      <div class="skill-bar html"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">CSS</span>
                        <span class="value">90%</span>
                      </div>
                      <div class="skill-bar css"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">Javascript</span>
                        <span class="value">65%</span>
                      </div>
                      <div class="skill-bar js"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">React</span>
                        <span class="value">70%</span>
                      </div>
                      <div class="skill-bar react"></div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div class="wave">
              <div class="skill_btn" onClick={() => setSKill(!skill)}>
                <div className="bar_icon">
                  <MdDesignServices />
                </div>
                <div class="label">
                  <h3 class="title">Designer</h3>
                  <span class="subtitle">More than 2 years</span>
                </div>
                <div class="arrowupIcon">
                  <IoIosArrowUp />
                </div>
              </div>
              {skill && (
                <div className="skill_content">
                  <ul class="skill-list">
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">Photoshop</span>
                        <span class="value">80%</span>
                      </div>
                      <div class="skill-bar Photo"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">Illustrator</span>
                        <span class="value">70%</span>
                      </div>
                      <div class="skill-bar illustrator"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">Figma</span>
                        <span class="value">70%</span>
                      </div>
                      <div class="skill-bar figma"></div>
                    </li>
                    <li class="skill-item">
                      <div class="skill-title">
                        <span class="name">Sketch</span>
                        <span class="value">40%</span>
                      </div>
                      <div class="skill-bar sketch"></div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* project */}

      <div className="project" id="project">
        <div className="wrapper app-width">
          <div className="heading">
            <div className="ls">
              <div className="heading_name">Our Projects</div>
            </div>
            <div className="rs">
              {btn.map((btn) => (
                <button
                  className={`btn_wave ${
                    activeTap === btn.value ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTap(btn.value);
                    if (btn.value === "All") {
                      setItems(Project); // Show all projects
                    } else {
                      filteritem(btn.value); // Filter projects
                    }
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="wave">
              {items.map((item, index) => (
                <div className="project_card" key={index}>
                  <img src={item.image} alt={`Project ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* service */}

      <div className="service" id="service">
        <div className="heading_text">
          <div className="title_text">My Services</div>
          <div className="title_detail">what i will do for you</div>
        </div>
        <div className="wrapper app-width">
          <div className="wave">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
                autoplay: true,
                autoplaySpeed: 2000,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {service.map((item, index) => (
                <SwiperSlide className="swipeSlide">
                  <div className="box" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="text">
                      <h1>{item.title}</h1>
                      <button
                        className="more-btn"
                        onClick={() => setOpenView(true)}
                      >
                        View More
                        <FaArrowRight />
                      </button>
                    </div>
                    <Modal
                      open={openView}
                      onClose={() => setOpenView(false)}
                      className="modal"
                    >
                      <div className="View_Member">
                        <div className="heading_view_member">
                          <div className="View_Member_add">{item?.title}</div>
                          <div
                            onClick={() => setOpenView(false)}
                            className="close_btn"
                          >
                            <IoClose />
                          </div>
                        </div>
                        <div className="member_section">
                          <div className="card_detail">
                            <div className="checkIcon">
                              <IoCheckmarkOutline />
                            </div>
                            <div className="int">{item.int}</div>
                          </div>
                          <div className="card_detail">
                            <div className="checkIcon">
                              <IoCheckmarkOutline />
                            </div>
                            <div className="int">{item.pWeb}</div>
                          </div>
                          <div className="card_detail">
                            <div className="checkIcon">
                              <IoCheckmarkOutline />
                            </div>
                            <div className="int">{item.pbrand}</div>
                          </div>
                          <div className="card_detail">
                            <div className="checkIcon">
                              <IoCheckmarkOutline />
                            </div>
                            <div className="int">{item.pcreate}</div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* contact */}

      <div className="content" id="contact">
        <div className="wrapper app-width">
          <div className="content_headingText">
            <div className="heading_text">Contact</div>
            <div className="heading_intro">Get in touch</div>
          </div>
          <div className="wave">
            <div className="ls">
              <div className="cont_list">
                <div className="icon">
                  <MdOutlinePhoneAndroid />
                </div>
                <div class="data">
                  <h3 class="title">Call Me</h3>
                  <span class="subtitle">03221344631</span>
                </div>
              </div>
              <div className="cont_list">
                <div className="icon">
                  <AiOutlineMail />
                </div>
                <div class="data">
                  <h3 class="title">Email</h3>
                  <span class="subtitle">adeelnazeer631@email.com</span>
                </div>
              </div>
              <div className="cont_list">
                <div className="icon">
                  <CiLocationArrow1 />
                </div>
                <div class="data">
                  <h3 class="title">Location</h3>
                  <span class="subtitle">Multan</span>
                </div>
              </div>
            </div>
            <div className="rs">
              <div className="form">
                <div className="form_content from_name">
                  <input
                    type="name"
                    id=" name"
                    placeholder="First Name"
                    className="firstName input_name"
                    required
                  ></input>
                  <input
                    type="name"
                    id="name"
                    placeholder="Last Name"
                    className="lastName input_name"
                    required
                  ></input>
                </div>
                <div className="form_content">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="email"
                  ></input>
                </div>
                <div className="form_content">
                  <textarea
                    name="#"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter Message"
                    className="input_message"
                  ></textarea>
                </div>
                <div className="form_content">
                  <button className="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="wrapper app-width">
          <div className="copy_wave">
            <div className="ls">
              <div className="copy_text">
                © 2024 <span className="color">Adeel Nazeer</span> Programmer.
                All Rights Reserved.
              </div>
            </div>
            <div className="rs">
              <div className="copy_social_link">
                <Link
                  to="https://www.facebook.com/profile.php?id=100073200212966"
                  className="social_link"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.youtube.com/"
                  className="social_link"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/adeel-nazeer-95aaa5269/"
                  className="social_link"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/malikadeel04/"
                  className="social_link"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
