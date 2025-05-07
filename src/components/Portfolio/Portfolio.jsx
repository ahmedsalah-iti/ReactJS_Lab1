import React from 'react';
import myInfo from '../../info';
const {projects} = myInfo

const Portfolio = () => {
  return (
<>
<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center mb-8">Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
                projects.map((project,index)=>(
                    <div key={index} className="card shadow-soft interactive-scale">
                        <div className="card-body">
                        <h3 className="h3 mb-2">{project.name}</h3>
                        <p className="text-muted mb-4">{project.description}</p>
                        <a href={project.githubLink} target="_blank" className="btn btn-outline" > View on GitHub </a>
                    </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
</>
  );
};

export default Portfolio;