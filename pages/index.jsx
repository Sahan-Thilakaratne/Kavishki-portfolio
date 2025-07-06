import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";


const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}<div className="margin"></div>
                      Hi, <b>I am</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Kavishki</b> <span className="smaller-font">Perera</span>{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    {/*I am a<strong>Associate Software Developer</strong>*/}
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                     Innovative and results-driven Interactive Media specialist with a strong
                      foundation in content creation, multimedia design, and user engagement
                      strategies. Currently pursuing a BSc (Hons) in Information Technology
                      specializing in Interactive Media at SLIIT. Proven experience in banking IT
                      support and freelance content creation, with a passion for leveraging
                      technology to enhance user experiences.
                    </p>
                  </div>
                  <div className="social-links">
                  {/*  <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-behance" />
                    </a> */}

                    <img 
                      decoding="async"
                      src="assets/images/icons8-linkedin-30.png"
                      alt="LinkedIn"
                    />

                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1AlN-TZhO4V2JiwxJAkFB7oUBgIdJVgmC/view?usp=drivesdk"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img 
                  decoding="async"
                  src="assets/images/profilek.jpeg"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        2 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">10</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span className="smaller-font-2" > Software Enginner </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Expertise</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
              <div className="container">
                <Swiper
                  {...servicesSliderProps}
                  className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="services-item">
                      <div className="lui-subtitle">
                        <span> Interactive Media Design </span>
                      </div>
                      <div className="icon" />
                      <h5 className="lui-title">
                        <span> Engaging User Interfaces & Visuals </span>
                      </h5>
                      <div className="lui-text">
                        <div>
                          Crafting immersive user journeys through UI/UX design, motion graphics, and interactive visuals using tools like Figma, After Effects, and Premiere Pro. Bridging creativity with usability for maximum engagement.
                        </div>
                      </div>
                      <a href="#pricing-section" className="lnk"> See Pricing </a>
                      <div
                        className="image"
                        style={{
                          backgroundImage: "url(assets/images/pat-2.png)",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="services-item">
                      <div className="lui-subtitle">
                        <span> Content Creation & Branding </span>
                      </div>
                      <div className="icon" />
                      <h5 className="lui-title">
                        <span> Video, Animation & Social Media </span>
                      </h5>
                      <div className="lui-text">
                        <div>
                          <p>Producing high-impact content for platforms like Instagram, TikTok, and YouTube. From branded video storytelling to educational media, I align visual creativity with digital marketing goals.</p>
                        </div>
                      </div>
                      <a href="#pricing-section" className="lnk"> See Pricing </a>
                      <div
                        className="image"
                        style={{
                          backgroundImage: "url(assets/images/pat-2.png)",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="services-item">
                      <div className="lui-subtitle">
                        <span> IT Support & System Maintenance </span>
                      </div>
                      <div className="icon" />
                      <h5 className="lui-title">
                        <span> Banking Tech Support </span>
                      </h5>
                      <div className="lui-text">
                        <div>
                          Providing enterprise-level technical support in banking environments. Skilled in maintaining system integrity, resolving software issues, and optimizing digital services for smooth operations.
                        </div>
                      </div>
                      <a href="#pricing-section" className="lnk"> See Pricing </a>
                      <div
                        className="image"
                        style={{
                          backgroundImage: "url(assets/images/pat-2.png)",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                  <div className="swiper-pagination" />
                </Swiper>
                <div className="lui-bgtitle">
                  <span> Services </span>
                </div>
              </div>
            </div>

      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
  {/* Heading */}
  <div className="lui-heading">
    <div className="container">
      <div className="m-titles align-center">
        <h2
          className="m-title splitting-text-anim-1 scroll-animate"
          data-splitting="words"
          data-animate="active"
        >
          <span> Professional Skills </span>
        </h2>
        <div
          className="m-subtitle splitting-text-anim-1 scroll-animate"
          data-splitting="words"
          data-animate="active"
        >
          <span> my <b>Talent</b> </span>
        </div>
      </div>
    </div>
  </div>

  {/* Skills */}
  <div className="v-line v-line-left">
    <div className="container">
      <div className="row">
        {/* Column 1 */}
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className="skills-items">
            {/* Photoshop / Illustrator */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fas fa-paint-brush"></i> <span> Photoshop / Illustrator </span></h6>
              <div className="dots"><div className="dot" style={{ width: "80%" }}><span /></div></div>
              <div className="value"><span className="num">80 <span>%</span></span></div>
            </div>

            {/* Premiere Pro / After Effects */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fas fa-film"></i> <span> Premiere Pro / After Effects </span></h6>
              <div className="dots"><div className="dot" style={{ width: "85%" }}><span /></div></div>
              <div className="value"><span className="num">85 <span>%</span></span></div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className="skills-items">
            {/* HTML/CSS/JavaScript */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fab fa-html5"></i> <span> HTML / CSS / JavaScript </span></h6>
              <div className="dots"><div className="dot" style={{ width: "80%" }}><span /></div></div>
              <div className="value"><span className="num">80 <span>%</span></span></div>
            </div>

            {/* WordPress */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fab fa-wordpress"></i> <span> WordPress CMS </span></h6>
              <div className="dots"><div className="dot" style={{ width: "75%" }}><span /></div></div>
              <div className="value"><span className="num">75 <span>%</span></span></div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className="skills-items">
            {/* Blender / Maya */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fas fa-cube"></i> <span> Blender / Autodesk Maya </span></h6>
              <div className="dots"><div className="dot" style={{ width: "70%" }}><span /></div></div>
              <div className="value"><span className="num">70 <span>%</span></span></div>
            </div>

            {/* IT Support */}
            <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
              <h6 className="name"><i className="fas fa-tools"></i> <span> IT Support & Troubleshooting </span></h6>
              <div className="dots"><div className="dot" style={{ width: "80%" }}><span /></div></div>
              <div className="value"><span className="num">80 <span>%</span></span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lui-bgtitle">
        <span> Skills </span>
      </div>
    </div>
  </div>
</section>


      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span> Kiribathgoda </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Software development </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> kavishkiperera@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> +94 771 965 642 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            {/** Accept the terms and conditions. */}
                          </div>
                          <a
                            href="#"
                            className="btn"
                            onclick="$('#cform').submit(); return false;"
                          >
                            <span>Send Message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
