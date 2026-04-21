import React from 'react';
import { EXPERIENCE_DATA } from '../../utils/constants';

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="experience">
      {/* Experience Section Content */}
      {/* Designed to look like a vertical timeline with company logos(optional), job titles, dates, and descriptions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-left">Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          {/* Experience items */}
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex items-start w-full ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div className="w-full md:w-1/2 pl-16 md:pl-0">
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow`}></div>
                
                <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                      <p className="text-lg font-semibold text-blue-600">{item.company}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full whitespace-nowrap ml-2">
                      {item.employmentType}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>    
    </section>
  );
};

export default Experience;
