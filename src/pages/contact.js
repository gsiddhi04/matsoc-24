import React from 'react';
import '../styles/contact.css';
// import Footer from '../Componenets/footer';
import ContactCard  from '../Componenets/ContactCard';


const Contact = () => {
    return <div className='container'>
      <h3 className="article-head">
				Contact Us</h3>
         <div className="contact-grid">
      <ContactCard
        title="Manager"
        name="Aatri Nag"
        email="aatrinag22@iitk.ac.in"
        image="images/nag.jpg"
      />
      <ContactCard
        title="Manager"
        name="Aman Nigam"
        email="anamn@iitk.ac.in"
        image="images/nigam.jpg"
      />
      <ContactCard
        title="Manager"
        name="Thejas Kasilingam"
        email="thejask@iitk.ac.in"
        image="images/thejas.jpg"
      />
      <ContactCard
        title="Manager"
        name="Nikhil Yadav"
        email="nikhily22@iitk.ac.in"
        image="images/ep.jpg"
      />
      <ContactCard
        title="Manager"
        name="Prashant Sekhar"
        email="prashantsh22@iitk.ac.in"
        image="images/ep.jpg"
      />
    </div>
    {/* <Footer/> */}
    </div>;
}

export default Contact;