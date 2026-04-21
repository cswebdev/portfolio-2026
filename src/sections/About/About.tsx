import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import about3 from '../../assets/images/about3.jpg';
import about4 from '../../assets/images/about4.jpg';

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

const About: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images: ImageData[] = [
    {
      src: about1,
      alt: 'About me 1',
      caption: 'Carolina Code Conference, 2024'
    },
    {
      src: about2,
      alt: 'About me 2',
      caption: 'My graduating class from Carolina Code School, 2023'
    },
    {
      src: about3,
      alt: 'About me 3',
      caption: 'Carolina Code School group photo, 2023'
    },
    {
      src: about4,
      alt: 'About me 4',
      caption: 'Group photo with fellow students, 2024'
    }
  ];

  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  // Close modal on ESC key press and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, images.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  return (
    <section className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 animate-fade-in" id="about">
      <h2 className="text-3xl font-bold mb-8 md:mb-12">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left side: Text content */}
        <div className="flex-1 space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey into technology began in high school, where I first learned Visual Basic and HTML. What started as curiosity quickly grew into a passion for software development. Since then, I've worked on a variety of projects from personal websites to volunteer and freelance work with a focus on building efficient, user-friendly solutions.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            As someone who is hard of hearing, I'm especially passionate about creating accessible and inclusive web experiences. My background includes over eight years as an optician, where I supported individuals with vision challenges. That experience shaped my perspective on accessibility and reinforced the importance of designing technology that works for everyone.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            In my free time, I stay engaged with the tech community by attending or volunteering at local meetups, exploring new programming languages and frameworks, and keeping up with evolving web development and accessibility standards.
          </p>
        </div>

        {/* Right side: Photo grid 2x2 */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <figure key={index} className="group cursor-pointer" onClick={() => setSelectedImageIndex(index)}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                />
                <figcaption className="mt-2 text-xs md:text-sm text-gray-600 text-center">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && ReactDOM.createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-5xl w-full flex items-center justify-center gap-4">
            {/* Left chevron */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="flex-shrink-0 text-white hover:text-gray-300 transition-colors p-3 hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <IconChevronLeft size={40} stroke={2.5} />
            </button>

            <div className="flex-1 max-w-5xl">
              {/* Close button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Close lightbox"
              >
                <IconX size={32} />
              </button>

              {/* Image container */}
              <div 
                className="relative bg-white rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain"
              />
              {selectedImage.caption && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 text-center">
                    {selectedImage.caption}
                  </p>
                </div>
              )}
              </div>
            </div>

            {/* Right chevron */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="flex-shrink-0 text-white hover:text-gray-300 transition-colors p-3 hover:bg-white/10 rounded-full"
              aria-label="Next image"
            >
              <IconChevronRight size={40} stroke={2.5} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};


export default About;
