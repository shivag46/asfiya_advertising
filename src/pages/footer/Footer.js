import React from 'react';
import logo from '../../assets/logo.png'
import './footer.css';

const Footer = () => {
  return (
    <div className="aa__footer section__padding">
    <div className="aa__footer-links">
      <div className="aa__footer-links_logo">
        <h1> Asfiya<br/>Advertising</h1>
        <p>Advertising agency</p>
      </div>
      <div className="aa__footer-links_div">
        <h4>Company</h4>
        <p>Product</p>
        <p>Blog</p>
        <p>Support</p>
      </div>
      <div className="aa__footer-links_div">
        <h4>Contact Us</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="aa__footer-copyright">
      <p>@Copyright Team Inc.</p>
    </div>
  </div>
  )
}

export default Footer
