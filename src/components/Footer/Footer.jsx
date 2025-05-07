import React from 'react';
import myInfo from '../../info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

const Footer = () => {
  return (
    <>
    <footer className="py-12 bg-primary-900 text-white" id='contact'>
      <div className="container mx-auto px-4 text-center">
        <h2 className="h2 mb-4">Get in Touch</h2>
        <p className="text-lead text-primary-200 mb-6">
          Feel free to reach out for collaborations or inquiries!
        </p>
        <div className="flex justify-center gap-6 mb-8">
            {
                myInfo.socials.map((social,index)=>(
                    <a key={index} href={social.link} target="_blank"  className="text-primary-200 hover:text-white transition-smooth" ><FontAwesomeIcon icon={['fab', `${social.name}`]}  /> {social.name}</a>
                ))
            }

          <a
            href={`mailto:${myInfo.email}`}
            className="text-primary-200 hover:text-white transition-smooth"
          >
            <FontAwesomeIcon icon={['fas', 'message']}  /> Email
            
          </a>
        </div>
        <p className="text-muted">
          &copy; 2025 {myInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;