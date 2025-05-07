import React from 'react';
import myInfo from '../../info';
const Hero = () => {
    const profileImgUrl = "/static/images/profile.jpg";
    const backgroundImgUrl = "/static/images/bg.jpg";
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImgUrl})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-600/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="card glass max-w-2xl mx-auto p-8 text-center">
          <div className="mb-6">
            <img
              src={profileImgUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto shadow-deep interactive-scale"
            />
          </div>

          <h1 className="text-display font-bold text-white mb-3 slide-up">
            {myInfo.name}
          </h1>

          <p className="text-lead text-primary-100 mb-6 fade-in">
            {myInfo.title}
          </p>

          <a
            href="#contact"
            className="btn btn-primary btn-lg pulse-glow interactive-scale"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
    </section>
  );
};

export default Hero;