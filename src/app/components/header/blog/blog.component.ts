import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  tags: string[];
}

// Define a type for the image categories
type ImageCategory = 'tech' | 'fashion' | 'home' | 'fitness' | 'lifestyle' | 'business' | 'travel';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Tech Trends', 'Fashion', 'Home & Garden', 'Fitness', 'Lifestyle', 'Business', 'Travel'];

  // Base64 encoded SVG images for each category with proper typing
  base64Images: Record<ImageCategory, string> = {
    tech: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDQyMjVEIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5UZWNoIEdhZGdldHM8L3RleHQ+Cjwvc3ZnPg==',
    fashion: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRTkxRTYzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5GYXNoaW9uPC90ZXh0Pgo8L3N2Zz4=',
    home: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjNENBRjUwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5Ib21lICYgR2FyZGVuPC90ZXh0Pgo8L3N2Zz4=',
    fitness: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkY5ODAwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5GaXRuZXNzPC90ZXh0Pgo8L3N2Zz4=',
    lifestyle: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjOUMyN0IwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5MaWZlc3R5bGU8L3RleHQ+Cjwvc3ZnPg==',
    business: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjE5NkYzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5CdXNpbmVzczwvdGV4dD4KPC9zdmc+',
    travel: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDBCQ0Q0Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5UcmF2ZWw8L3RleHQ+Cjwvc3ZnPg=='
  };

  // Base64 encoded SVG images for author avatars
  authorImages: string[] = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDQyMjVEIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5KUzwvdGV4dD4KPC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRTkxRTYzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5TSjwvdGV4dD4KPC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNENBRjUwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5NRDwvdGV4dD4KPC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkY5ODAwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5FQjwvdGV4dD4KPC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjOUMyN0IwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5MVzwvdGV4dD4KPC9zdmc+',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMjE5NkYzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWtkZGxlIiB0ZXh0LWFuY2hvcj0ibWtkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIj5SQzwvdGV4dD4KPC9zdmc+'
  ];

  ngOnInit(): void {
    this.loadBlogPosts();
    this.filteredPosts = this.blogPosts;
  }

  loadBlogPosts(): void {
    this.blogPosts = [
      {
        id: 1,
        title: 'Top 10 Tech Gadgets You Need in 2024',
        excerpt: 'Discover the latest must-have tech gadgets that are revolutionizing the way we live and work.',
        content: 'Full content about tech gadgets...',
        image: this.base64Images.tech,
        category: 'Tech Trends',
        date: 'Nov 20, 2024',
        author: 'John Smith',
        authorImage: this.authorImages[0],
        readTime: '5 min read',
        tags: ['Technology', 'Gadgets', 'Innovation']
      },
      {
        id: 2,
        title: 'Sustainable Fashion: Trends to Watch',
        excerpt: 'Explore the latest sustainable fashion trends that are making waves in the industry.',
        content: 'Full content about sustainable fashion...',
        image: this.base64Images.fashion,
        category: 'Fashion',
        date: 'Nov 18, 2024',
        author: 'Sarah Johnson',
        authorImage: this.authorImages[1],
        readTime: '4 min read',
        tags: ['Fashion', 'Sustainability', 'Eco-friendly']
      },
      {
        id: 3,
        title: 'Home Organization Tips for Modern Living',
        excerpt: 'Transform your living space with these innovative home organization ideas and tips.',
        content: 'Full content about home organization...',
        image: this.base64Images.home,
        category: 'Home & Garden',
        date: 'Nov 15, 2024',
        author: 'Mike Davis',
        authorImage: this.authorImages[2],
        readTime: '6 min read',
        tags: ['Home', 'Organization', 'Lifestyle']
      },
      {
        id: 4,
        title: 'Best Fitness Equipment for Home Workouts',
        excerpt: 'Create the perfect home gym with our selection of essential fitness equipment.',
        content: 'Full content about fitness equipment...',
        image: this.base64Images.fitness,
        category: 'Fitness',
        date: 'Nov 12, 2024',
        author: 'Emily Brown',
        authorImage: this.authorImages[3],
        readTime: '7 min read',
        tags: ['Fitness', 'Workout', 'Health']
      },
      {
        id: 5,
        title: 'Smart Home Automation Made Easy',
        excerpt: 'Learn how to transform your home into a smart living space with these simple automation tips.',
        content: 'Full content about home automation...',
        image: this.base64Images.tech,
        category: 'Tech Trends',
        date: 'Nov 10, 2024',
        author: 'David Wilson',
        authorImage: this.authorImages[4],
        readTime: '8 min read',
        tags: ['Smart Home', 'Automation', 'Technology']
      },
      {
        id: 6,
        title: 'Minimalist Wardrobe: Building Your Capsule Collection',
        excerpt: 'Discover the art of minimalist fashion and build a versatile capsule wardrobe.',
        content: 'Full content about minimalist wardrobe...',
        image: this.base64Images.fashion,
        category: 'Fashion',
        date: 'Nov 8, 2024',
        author: 'Lisa Chen',
        authorImage: this.authorImages[5],
        readTime: '5 min read',
        tags: ['Fashion', 'Minimalism', 'Style']
      },
      {
        id: 7,
        title: 'Urban Gardening: Growing Food in Small Spaces',
        excerpt: 'Learn how to create a productive garden even in the smallest urban spaces.',
        content: 'Full content about urban gardening...',
        image: this.base64Images.home,
        category: 'Home & Garden',
        date: 'Nov 5, 2024',
        author: 'Robert Garcia',
        authorImage: this.authorImages[0],
        readTime: '9 min read',
        tags: ['Gardening', 'Urban', 'Sustainability']
      },
      {
        id: 8,
        title: 'The Future of E-commerce: Trends to Watch',
        excerpt: 'Explore the emerging trends that are shaping the future of online shopping.',
        content: 'Full content about e-commerce trends...',
        image: this.base64Images.business,
        category: 'Business',
        date: 'Nov 3, 2024',
        author: 'Jennifer Lee',
        authorImage: this.authorImages[1],
        readTime: '6 min read',
        tags: ['E-commerce', 'Business', 'Technology']
      },
      {
        id: 9,
        title: 'Mindfulness and Meditation for Busy Professionals',
        excerpt: 'Discover simple mindfulness practices that can transform your workday.',
        content: 'Full content about mindfulness...',
        image: this.base64Images.lifestyle,
        category: 'Lifestyle',
        date: 'Nov 1, 2024',
        author: 'Michael Thompson',
        authorImage: this.authorImages[2],
        readTime: '4 min read',
        tags: ['Mindfulness', 'Wellness', 'Lifestyle']
      },
      {
        id: 10,
        title: 'Budget Travel: Exploring the World Without Breaking the Bank',
        excerpt: 'Learn how to travel smart and explore amazing destinations on a budget.',
        content: 'Full content about budget travel...',
        image: this.base64Images.travel,
        category: 'Travel',
        date: 'Oct 28, 2024',
        author: 'Amanda Rodriguez',
        authorImage: this.authorImages[3],
        readTime: '7 min read',
        tags: ['Travel', 'Budget', 'Adventure']
      },
      {
        id: 11,
        title: 'The Rise of Sustainable Technology',
        excerpt: 'How green tech is revolutionizing industries and helping the planet.',
        content: 'Full content about sustainable technology...',
        image: this.base64Images.tech,
        category: 'Tech Trends',
        date: 'Oct 25, 2024',
        author: 'Chris Martin',
        authorImage: this.authorImages[4],
        readTime: '8 min read',
        tags: ['Technology', 'Sustainability', 'Innovation']
      },
      {
        id: 12,
        title: 'DIY Home Decor Projects for Beginners',
        excerpt: 'Transform your space with these easy and affordable DIY home decor ideas.',
        content: 'Full content about DIY projects...',
        image: this.base64Images.home,
        category: 'Home & Garden',
        date: 'Oct 22, 2024',
        author: 'Sophia Williams',
        authorImage: this.authorImages[5],
        readTime: '5 min read',
        tags: ['DIY', 'Home Decor', 'Creative']
      }
    ];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredPosts = this.blogPosts;
    } else {
      this.filteredPosts = this.blogPosts.filter(post => post.category === category);
    }
  }

  searchBlogPosts(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredPosts = this.blogPosts;
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredPosts = this.blogPosts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.tags.some(tag => tag.toLowerCase().includes(term)) ||
      post.author.toLowerCase().includes(term)
    );
  }

  getFeaturedPosts(): BlogPost[] {
    return this.blogPosts.slice(0, 3);
  }

  getRecentPosts(): BlogPost[] {
    return [...this.blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
  }

  getPostCount(category: string): number {
    return this.blogPosts.filter(post => post.category === category).length;
  }

  getAllTags(): string[] {
    const allTags = this.blogPosts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags.slice(0, 15);
  }

  // Helper method to get image for a category
  getImageForCategory(category: string): string {
    const categoryMap: Record<string, ImageCategory> = {
      'Tech Trends': 'tech',
      'Fashion': 'fashion',
      'Home & Garden': 'home',
      'Fitness': 'fitness',
      'Lifestyle': 'lifestyle',
      'Business': 'business',
      'Travel': 'travel'
    };
    
    const imageKey = categoryMap[category];
    return imageKey ? this.base64Images[imageKey] : this.base64Images.tech;
  }

  // Helper method to get author image (using arrow function to avoid 'this' context issues)
  getAuthorImageById = (id: number): string => {
    return this.authorImages[id % this.authorImages.length];
  }
}