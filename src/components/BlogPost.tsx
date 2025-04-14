
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowLeft } from 'lucide-react';

interface BlogPostContentProps {
  title: string;
  date: string;
  content: React.ReactNode;
  tags: string[];
}

const BlogPost: React.FC<BlogPostContentProps> = ({ title, date, content, tags }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        size="sm"
        className="mb-6 flex items-center gap-1"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft size={16} />
        Back to all posts
      </Button>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Clock size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
