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
        image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop',
        category: 'Tech Trends',
        date: 'Nov 20, 2024',
        author: 'John Smith',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        readTime: '5 min read',
        tags: ['Technology', 'Gadgets', 'Innovation']
      },
      {
        id: 2,
        title: 'Sustainable Fashion: Trends to Watch',
        excerpt: 'Explore the latest sustainable fashion trends that are making waves in the industry.',
        content: 'Full content about sustainable fashion...',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
        category: 'Fashion',
        date: 'Nov 18, 2024',
        author: 'Sarah Johnson',
        authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        readTime: '4 min read',
        tags: ['Fashion', 'Sustainability', 'Eco-friendly']
      },
      {
        id: 3,
        title: 'Home Organization Tips for Modern Living',
        excerpt: 'Transform your living space with these innovative home organization ideas and tips.',
        content: 'Full content about home organization...',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        category: 'Home & Garden',
        date: 'Nov 15, 2024',
        author: 'Mike Davis',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        readTime: '6 min read',
        tags: ['Home', 'Organization', 'Lifestyle']
      },
      {
        id: 4,
        title: 'Best Fitness Equipment for Home Workouts',
        excerpt: 'Create the perfect home gym with our selection of essential fitness equipment.',
        content: 'Full content about fitness equipment...',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'Fitness',
        date: 'Nov 12, 2024',
        author: 'Emily Brown',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        readTime: '7 min read',
        tags: ['Fitness', 'Workout', 'Health']
      },
      {
        id: 5,
        title: 'Smart Home Automation Made Easy',
        excerpt: 'Learn how to transform your home into a smart living space with these simple automation tips.',
        content: 'Full content about home automation...',
        image: 'https://images.unsplash.com/photo-1558002038-10559086f30d?w=600&h=400&fit=crop',
        category: 'Tech Trends',
        date: 'Nov 10, 2024',
        author: 'David Wilson',
        authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        readTime: '8 min read',
        tags: ['Smart Home', 'Automation', 'Technology']
      },
      {
        id: 6,
        title: 'Minimalist Wardrobe: Building Your Capsule Collection',
        excerpt: 'Discover the art of minimalist fashion and build a versatile capsule wardrobe.',
        content: 'Full content about minimalist wardrobe...',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
        category: 'Fashion',
        date: 'Nov 8, 2024',
        author: 'Lisa Chen',
        authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
        readTime: '5 min read',
        tags: ['Fashion', 'Minimalism', 'Style']
      },
      {
        id: 7,
        title: 'Urban Gardening: Growing Food in Small Spaces',
        excerpt: 'Learn how to create a productive garden even in the smallest urban spaces.',
        content: 'Full content about urban gardening...',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop',
        category: 'Home & Garden',
        date: 'Nov 5, 2024',
        author: 'Robert Garcia',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        readTime: '9 min read',
        tags: ['Gardening', 'Urban', 'Sustainability']
      },
      {
        id: 8,
        title: 'The Future of E-commerce: Trends to Watch',
        excerpt: 'Explore the emerging trends that are shaping the future of online shopping.',
        content: 'Full content about e-commerce trends...',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        category: 'Business',
        date: 'Nov 3, 2024',
        author: 'Jennifer Lee',
        authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        readTime: '6 min read',
        tags: ['E-commerce', 'Business', 'Technology']
      },
      {
        id: 9,
        title: 'Mindfulness and Meditation for Busy Professionals',
        excerpt: 'Discover simple mindfulness practices that can transform your workday.',
        content: 'Full content about mindfulness...',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
        category: 'Lifestyle',
        date: 'Nov 1, 2024',
        author: 'Michael Thompson',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        readTime: '4 min read',
        tags: ['Mindfulness', 'Wellness', 'Lifestyle']
      },
      {
        id: 10,
        title: 'Budget Travel: Exploring the World Without Breaking the Bank',
        excerpt: 'Learn how to travel smart and explore amazing destinations on a budget.',
        content: 'Full content about budget travel...',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
        category: 'Travel',
        date: 'Oct 28, 2024',
        author: 'Amanda Rodriguez',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        readTime: '7 min read',
        tags: ['Travel', 'Budget', 'Adventure']
      },
      {
        id: 11,
        title: 'The Rise of Sustainable Technology',
        excerpt: 'How green tech is revolutionizing industries and helping the planet.',
        content: 'Full content about sustainable technology...',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
        category: 'Tech Trends',
        date: 'Oct 25, 2024',
        author: 'Chris Martin',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        readTime: '8 min read',
        tags: ['Technology', 'Sustainability', 'Innovation']
      },
      {
        id: 12,
        title: 'DIY Home Decor Projects for Beginners',
        excerpt: 'Transform your space with these easy and affordable DIY home decor ideas.',
        content: 'Full content about DIY projects...',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        category: 'Home & Garden',
        date: 'Oct 22, 2024',
        author: 'Sophia Williams',
        authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
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
}