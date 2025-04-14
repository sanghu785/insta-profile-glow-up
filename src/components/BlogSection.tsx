
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  const navigate = useNavigate();
  // Just show the most recent 3 blog posts on the home page
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {recentPosts.map((post) => (
            <Card key={post.id} className="blog-post h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="w-full mt-auto"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button onClick={() => navigate('/blog')} size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
