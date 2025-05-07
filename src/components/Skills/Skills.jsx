import React from 'react';

import myInfo from '../../info';

const Skills = () => {
  return (
    <>
    
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center mb-8">My Skills</h2>
        <div className="grid gap-6 max-w-2xl mx-auto">
            {
                myInfo.skills.map((skill,index)=>(
                    <div key={index} className="flex flex-col">
                        <div className="flex justify-between mb-2">
                        <span className="text-lead font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.percent}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
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

export default Skills;