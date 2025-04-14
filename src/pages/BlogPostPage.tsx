
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import { sampleData } from '../data/sampleData';
import { Link } from 'react-router-dom';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { personalInfo, blogPosts } = sampleData;
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog list
  if (!post) {
    return <Navigate to="/blog" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | {personalInfo.name}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      
      <header className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-xl font-bold hover:underline">
            {personalInfo.name}
          </Link>
        </div>
      </header>
      
      <main className="flex-grow py-8">
        <BlogPost
          title={post.title}
          date={post.date}
          tags={post.tags}
          content={
            <>
              <p className="mb-4">{post.content || post.description}</p>
              <p className="mb-4">This is a sample blog post. In a real implementation, the content would be stored as Markdown or HTML and rendered here.</p>
              <p className="mb-4">You can easily replace this with your own content by editing the data files.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Section Heading</h2>
              <p className="mb-4">Each blog post can have rich content including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Formatted text with headings, paragraphs and lists</li>
                <li>Images and other media</li>
                <li>Code snippets</li>
                <li>Quotes and references</li>
              </ul>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic my-6">
                "This is an example of a blockquote that might appear in your blog post to highlight a quote or important text."
              </blockquote>
              <p>The blog system is designed to be simple but extensible, allowing you to add more features as needed.</p>
            </>
          }
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

export default BlogPostPage;
