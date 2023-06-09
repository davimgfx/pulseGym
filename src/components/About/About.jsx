import AboutCards from "./AboutCards";
import AboutSection from "./AboutSection";
const About = () => {
  return (
    <>
      <section
        className="flex flex-col justify-between gap-2 about-section pb-[10rem]"
        id="about">
        <div className="flex gap-10 -mt-[8.5rem] md1000:flex-col px-20 mb-[10rem]">
          <AboutCards />
        </div>
        <AboutSection icons="true" title="ELEVATE YOUR HEALTH
AND FITNESS JOURNEY" paragraph="TRANSFORM YOUR HEALTH AND PHYSIQUE WITH OUR ALL-INCLUSIVE PROGRAM METICULOUSLY CRAFTED TO PROPEL YOU TOWARDS YOUR ULTIMATE FITNESS ASPIRATIONS."/>
      </section>
    </>
  );
};

export default About;
