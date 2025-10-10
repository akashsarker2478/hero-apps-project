import React from 'react';
import playstore from '../../assets/googlePlay.png'
import appstore from '../../assets/appStore.png'
import facebook from '../../assets/facebook1.png'
import twitter from '../../assets/twitter1.png'
import linkdin from '../../assets/linkdin1.png'

const Footer = () => {
    return (
<div className='bg-gradient-to-b from-[#632ee3] to-[#9f62f2]'>
         <div className="footer sm:footer-horizontal  text-white p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
                <a className="link link-hover">App Development</a>
                <a className="link link-hover">UI/UX Design</a>
                <a className="link link-hover">Mobile Solutions</a>
                <a className="link link-hover">Digital Marketing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
               <a className="link link-hover">About NextGen Apps</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Press</a>
  </nav>
   <nav>
    <h6 className="footer-title">Get our App</h6>
    <div className="flex  gap-2 mt-2">
      <button onClick={() => window.open('https://play.google.com/store', '_blank')}>
        <img src={playstore} alt="Google Play" className="w-9" />
      </button>
      <button onClick={() => window.open('https://apps.apple.com/', '_blank')}>
        <img src={appstore} alt="App Store" className="w-9" />
      </button>
    </div>
  </nav>
   <nav>
    <h6 className="footer-title">Social Media</h6>
    <div className="flex  gap-2 mt-2">
      <button onClick={() =>window.open('https://www.facebook.com/', '_blank')}>
        <img src={facebook} alt="facebook" className="w-9" />
      </button>
      <button onClick={() => window.open('https://twitter.com/', '_blank')}>
        <img src={twitter} alt="twitter" className="w-9" />
      </button>
      <button onClick={() =>window.open('https://www.linkedin.com/', '_blank')}>
        <img src={linkdin} alt="linkdin" className="w-9" />
      </button>
    </div>
  </nav>
  
 
</div>
<div className="text-center p-4 border-t border-gray-300 font-bold text-white
">
                <p><i>© {new Date().getFullYear()} NextGen Apps. All rights reserved.</i></p>
            </div>
</div>
    );
};

export default Footer;