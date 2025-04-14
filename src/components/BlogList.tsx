
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Clock, Search } from 'lucide-react';
import { Pagination } from './Pagination';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const POSTS_PER_PAGE = 5;

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [blogPosts]);

  // Filter posts based on search term and tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = filterTag === null || post.tags.includes(filterTag);
      
      return matchesSearch && matchesTag;
    });
  }, [blogPosts, searchTerm, filterTag]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when search or filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterTag]);

  const handleTagClick = (tag: string) => {
    setFilterTag(tag === filterTag ? null : tag);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <div className="w-full md:w-auto flex items-center space-x-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tags filter */}
      <div className="mb-6">
        <h2 className="text-sm font-medium mb-2">Filter by tag:</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={filterTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
          {filterTag && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setFilterTag(null)}
              className="text-xs"
            >
              Clear filter
            </Button>
          )}
        </div>
      </div>

      {paginatedPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 mb-8">
            {paginatedPosts.map((post) => (
              <Card key={post.id} className="blog-post">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">{post.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="w-full sm:w-auto mt-2"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          {(searchTerm || filterTag) && (
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setFilterTag(null);
              }} 
              className="mt-4"
            >
              Clear all filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogList;
