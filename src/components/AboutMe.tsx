
import React from 'react';

interface AboutMeProps {
  bioText: string;
  images: string[];
}

const AboutMe: React.FC<AboutMeProps> = ({ bioText, images }) => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="md:w-1/2">
            <div className="prose lg:prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {bioText}
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="image-gallery">
              {images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Personal photo ${index + 1}`} 
                  className="shadow-md"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
