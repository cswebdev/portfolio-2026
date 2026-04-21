import React from 'react';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { SOCIAL_LINKS } from '../../utils/constants';

const Contact: React.FC = () => {
  const email = SOCIAL_LINKS.email;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just chatting about web development and accessibility. 
            Feel free to reach out!
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <IconMail size={24} />
              <span className="font-semibold">Send Email</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/50 transition-colors group"
                aria-label="GitHub Profile"
              >
                <IconBrandGithub size={32} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">GitHub</span>
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/50 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <IconBrandLinkedin size={32} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">LinkedIn</span>
              </a>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-gray-600">
            <p className="text-sm">Based in South Carolina, USA</p>
            <p className="text-sm">Open to remote and on-site opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
