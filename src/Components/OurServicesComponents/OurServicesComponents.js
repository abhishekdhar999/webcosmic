"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurServicesComponent.css"; // Make sure to use the correct file extension

function OurServicesComponent({ loading }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const name = "View All Services";
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          // markers: true, // Uncomment this line to see scroll markers for debugging
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, [loading]);

  return (
    <>
      <div className="h-full sm:mb-0">
        <div className={styles.servicesHeading}>
          <div className="left text-center md:text-left">
            <h1 className="head-1 my-0">
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">O</span>UR
            </h1>
            <h1 className="head-1 md:ml-36">
              SE<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">R</span>VIC<span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">E</span>S
            </h1>
          </div>

          <div className="right mt-4 md:mt-36 flex justify-center md:justify-start">
            <span className="text-8xl lg:text-9xl">
              <BsBoxArrowInUpRight />
            </span>
          </div>
        </div>
        {!loading && (
          <section className="scroll-section-outer h-full">
            <div ref={triggerRef}>
              <div ref={sectionRef} className="scroll-section-inner">
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    <div className="left">
                      <h1>Web Design & Development</h1>
                      <p>
                        Building Digital Excellence. Our team of expert
                        developers and designers is dedicated to crafting
                        personalized web solutions that elevate your brand's
                        online presence. We specialize in creating high-quality
                        websites and mobile applications tailored to your
                        unique business needs. By focusing on innovation,
                        reliability, and user experience, we deliver digital
                        platforms that are not only visually appealing but also
                        technically robust, ensuring your brand stands out in
                        the digital landscape.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Creative Web Design</span>
                            <span>Web Development</span>
                          </div>
                          <div>
                            <span>E-commerce Website</span>
                            <span>WordPress</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="Web Design & Development"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Service Section */}
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    {/* <!-- Left Section --> */}
                    <div className="left">
                      <h1>Digital Marketing</h1>
                      <p>
                        Driving Success Through Strategy. Our dynamic digital
                        marketing team crafts data-driven campaigns that
                        elevate your brand's online presence. We specialize in
                        SEO, social media marketing, email campaigns, and
                        influencer collaborations. By tailoring our approach to
                        your specific needs, we amplify your reach, engage
                        audiences, and convert leads into loyal customers.
                        Experience the transformative power of strategic
                        digital marketing with us.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Social Media Marketing</span>
                            <span>Search Engine Optimization</span>
                          </div>
                          <div>
                            <span>Email Campaigns</span>
                            <span>Influencer Collaborations</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="Digital Marketing"
                      />
                    </div>
                  </div>
                </div>

                {/* Third Service Section */}
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    {/* <!-- Left Section --> */}
                    <div className="left">
                      <h1>Branding & Identity</h1>
                      <p>
                        Crafting Unique Brand Identities. We understand the
                        significance of a strong brand presence, and our team
                        is dedicated to creating authentic and compelling
                        brand identities. From logo design to complete brand
                        strategy, we ensure your brand resonates with your
                        target audience. Our approach focuses on understanding
                        your vision, values, and market positioning, enabling
                        us to design brand experiences that leave a lasting
                        impression. Let us bring your brand to life with
                        creativity and purpose.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Logo Design</span>
                            <span>Brand Strategy</span>
                          </div>
                          <div>
                            <span>Market Positioning</span>
                            <span>Visual Identity</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="Branding & Identity"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth Service Section */}
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    {/* <!-- Left Section --> */}
                    <div className="left">
                      <h1>UI/UX Design</h1>
                      <p>
                        Elevating User Experience. Our UI/UX design team is
                        passionate about creating seamless and intuitive
                        digital experiences. We blend creativity and usability
                        to craft interfaces that delight users and drive
                        engagement. By understanding user behavior and
                        employing cutting-edge design practices, we ensure
                        your products are not only visually stunning but also
                        highly functional. Let us transform your ideas into
                        exceptional user experiences that leave a lasting
                        impact.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Intuitive Interfaces</span>
                            <span>Usability</span>
                          </div>
                          <div>
                            <span>Responsive Design</span>
                            <span>Design Systems</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="UI/UX Design"
                      />
                    </div>
                  </div>
                </div>

                {/* Fifth Service Section */}
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    {/* <!-- Left Section --> */}
                    <div className="left">
                      <h1>Content Creation</h1>
                      <p>
                        Engaging Storytelling for Your Brand. Our content
                        creation team is dedicated to crafting compelling and
                        authentic narratives that resonate with your audience.
                        From engaging blog posts and captivating videos to
                        persuasive copywriting and visually stunning graphics,
                        we deliver content that connects, inspires, and drives
                        results. By understanding your brand's unique voice and
                        objectives, we ensure your message reaches the right
                        audience and leaves a lasting impression. Let us bring
                        your story to life through exceptional content
                        creation.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Engaging Blogs</span>
                            <span>Captivating Videos</span>
                          </div>
                          <div>
                            <span>Copywriting</span>
                            <span>Graphics</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="Content Creation"
                      />
                    </div>
                  </div>
                </div>

                {/* Sixth Service Section */}
                <div className="scroll-section">
                  <div className={styles.scrollSection}>
                    {/* <!-- Left Section --> */}
                    <div className="left">
                      <h1>SEO Services</h1>
                      <p>
                        Optimizing Your Online Visibility. Our SEO services are
                        designed to enhance your website's search engine
                        rankings and increase organic traffic. We employ
                        cutting-edge techniques, in-depth keyword research, and
                        comprehensive analysis to boost your online presence.
                        Our team is committed to staying ahead of industry
                        trends, ensuring your website ranks higher and attracts
                        the right audience. Experience the power of strategic
                        SEO with our dedicated services.
                      </p>

                      <div className="btns">
                        <div>
                          <div>
                            <span>Keyword Research</span>
                            <span>Comprehensive Analysis</span>
                          </div>
                          <div>
                            <span>Link Building</span>
                            <span>On-Page Optimization</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section --> */}
                    <div className="right">
                      <Image
                        src="/freelance-work-7308505_1920-removebg-preview.png"
                        width={640}
                        height={640}
                        alt="SEO Services"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="flex justify-center mt-14">
        <Link
          href="/services"
          className="flex justify-center items-center gap-4 p-4 border rounded-full border-white text-white font-semibold hover:opacity-80"
        >
          {name}
          <BsBoxArrowInUpRight />
        </Link>
      </div>
    </>
  );
}

export default OurServicesComponent;
