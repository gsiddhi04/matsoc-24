import React from "react";
import '../styles/contact.css';
const ContactCard = ({ title, name, email, phone, image }) => (
  <div className="contact-card">
    <img src={image} alt={name} className="profile-image" />
    <div className="details">
      <h3>{title}</h3>
      <p><strong>{name}</strong></p>
      <p><strong><a href={`mailto:${email}`}>{email}</a></strong></p>
      
    </div>
  </div>
);
export default ContactCard;