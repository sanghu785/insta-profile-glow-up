
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import { sampleData } from '../data/sampleData';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPage = () => {
  const { personalInfo, blogPosts } = sampleData;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | {personalInfo.name}</title>
        <meta name="description" content={`Read the latest blog posts by ${personalInfo.name}`} />
      </Helmet>
      
      <header className="bg-secondary py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
          <Link to="/" className="flex items-center text-sm font-medium hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
        </div>
      </header>
      
      <main className="flex-grow">
        <BlogList blogPosts={blogPosts} />
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

export default BlogPage;
