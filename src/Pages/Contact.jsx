import React from "react";
import { StarterBanner } from "../components";
const Contact = () => {
  return (
    <section>
     
      <StarterBanner title="Contact US"/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d405.1957316312289!2d-85.78656098908971!3d35.66306664207057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUSA%20GYM!5e0!3m2!1spt-BR!2sbr!4v1686249493731!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      
    </section>
  );
};

export default Contact;
