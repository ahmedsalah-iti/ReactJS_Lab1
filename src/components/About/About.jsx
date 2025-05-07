import React from 'react';
import myInfo from '../../info';
const About = () => {
  const cvUrl = "/static/pdf/cv.pdf";
  return (
<>
<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lead text-muted mb-6">
            {myInfo.about}
          </p>
          <a
            href={cvUrl}
            download
            className="btn btn-secondary btn-lg interactive-scale"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
</>
  );
};

export default About;