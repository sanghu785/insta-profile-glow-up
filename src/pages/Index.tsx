
import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Achievements from '../components/Achievements';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import { sampleData } from '../data/sampleData';

const Index = () => {
  const { 
    personalInfo, 
    aboutMe, 
    achievements, 
    blogPosts 
  } = sampleData;

  return (
    <div className="min-h-screen">
      <Header 
        name={personalInfo.name}
        headline={personalInfo.headline}
        profileImage={personalInfo.profileImage}
        whatsappNumber={personalInfo.whatsappNumber}
        instagramUrl={personalInfo.instagramUrl}
        facebookUrl={personalInfo.facebookUrl}
      />
      
      <main>
        <AboutMe 
          bioText={aboutMe.bioText}
          images={aboutMe.images}
        />
        
        <Achievements 
          achievements={achievements}
        />
        
        <BlogSection 
          blogPosts={blogPosts}
        />
      </main>
      
      <Footer 
        name={personalInfo.name}
        instagramUrl={personalInfo.instagramUrl}
        facebookUrl={personalInfo.facebookUrl}
        whatsappNumber={personalInfo.whatsappNumber}
        email={personalInfo.email}
      />
    </div>
  );
};

export default Index;
