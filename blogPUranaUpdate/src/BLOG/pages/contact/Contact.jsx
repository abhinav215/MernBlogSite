import React from 'react'
import "./Contact.css"
import {FiGithub} from "react-icons/fi"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai"


const Contact = () => {
  return (
    <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">

    
    <form id="contact-form" class="form-horizontal">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Dehradun, Uttarakhand</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">941 1148 537</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">abhinav0606june@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="https://github.com/abhinav215" target="_blank" class="contact-icon">
            <FiGithub className='Icons'/></a>
          </li>
          <li><a href="https://www.linkedin.com/in/abhinav-bhatnagar-2347b81b4/" target="_blank" class="contact-icon">
            <AiOutlineLinkedin className='Icons'/></a>
          </li>
          <li><a href="https://www.instagram.com/abhinav_bhatnagar_boss/?utm_medium=copy_link"  target="_blank" class="contact-icon">
            <AiOutlineInstagram className='Icons'/></a>
          </li>
          <li><a href="https://www.facebook.com/abhinav.bhatnagar.587268" target="_blank" class="contact-icon">
            {/* gfd</a> */}
            <FaFacebook className='Icons'/></a>
          </li>       
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
    
  )
}

export default Contact