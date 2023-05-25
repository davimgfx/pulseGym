import AboutCards from "./AboutCards";

const About = () => {
  return (
    <>
     <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
         <div className="flex gap-10 -mt-[8.5rem] md1000:flex-col px-20">
             <AboutCards />
         </div>
     </section>
    </>
  );
};

export default About;
