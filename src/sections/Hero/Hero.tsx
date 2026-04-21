import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconChevronDown, IconDownload } from '@tabler/icons-react';
import Button from '../../components/Button';
import { HERO_DATA, SOCIAL_LINKS } from '../../utils/constants';
import portraitImage from '../../assets/images/IMG_20240815_201829_051-EDIT.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeClick = () => {
    window.open(HERO_DATA.cta.resume.href, '_blank');
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative z-10 animate-fade-in">
        {/* Left side: Text, buttons, social media icons */}
        <div className="flex-1 flex flex-col items-start text-left space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hello, <br />
              I'm <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{HERO_DATA.name}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              {HERO_DATA.title}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="secondary"
              onClick={handleResumeClick}
              className="flex items-center gap-2"
            >
              <IconDownload size={20} />
              {HERO_DATA.cta.resume.text}
            </Button>
          </div>
          
          {/* Social media icons */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                aria-label="GitHub Profile"
              >
                <IconBrandGithub size={26} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="text-xs text-gray-600 group-hover:text-blue-600 font-medium">GitHub</span>
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <IconBrandLinkedin size={26} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="text-xs text-gray-600 group-hover:text-blue-600 font-medium">LinkedIn</span>
              </a>
            )}
          </div>

          <div className="text-gray-700 space-y-1">
            <p className="font-semibold">{HERO_DATA.yearsOfExperience} Years of Experience</p>
            <p className="font-semibold">Based in {HERO_DATA.location}</p>
            <p className="font-semibold">{HERO_DATA.availability}</p>
          </div>
        </div>

        {/* Right side: Portrait image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50 transform transition-transform hover:scale-105 duration-300">
            <img 
              src={portraitImage} 
              alt={`Portrait of ${HERO_DATA.name}`}
              className="w-full h-full object-cover object-top scale-125"
            />   
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={() => handleScrollTo('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10 cursor-default group"
        aria-label="Scroll to next section"
      >
        <p className="animate-slow-bounce text-gray-600 opacity-50 text-sm group-hover:opacity-75 transition-opacity cursor-default">
          Continue
        </p>
        <IconChevronDown 
          size={32} 
          className="animate-slow-bounce text-gray-600 opacity-50 group-hover:opacity-75 transition-opacity cursor-default" 
        />
      </button>
    </section>
  );
};

export default Hero;
