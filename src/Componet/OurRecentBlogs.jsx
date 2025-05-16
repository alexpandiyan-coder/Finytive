import React from 'react';
import LineComponet from './service/cloud/LineComponet';

// BlogCard Component to represent each blog post
const BlogCard = ({ title, description, link }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} style={styles.link}>Read More →</a>
    </div>
  );
};

// Main OurRecentBlogs Component
const OurRecentBlogs = () => {
  const blogs = [
    {
      title: 'Understanding React Hooks',
      description: 'Explore the power of hooks like useState and useEffect to manage state and side effects in React.',
      link: '#'
    },
    {
      title: 'Mastering CSS Flexbox',
      description: 'Learn how Flexbox can help you build responsive layouts easily with just a few lines of CSS.',
      link: '#'
    },
    {
      title: 'Getting Started with Next.js',
      description: 'Discover why Next.js is a great framework for building fast, SEO-friendly web applications.',
      link: '#'
    }
  ];

  return (
    <section id="recent-blogs" style={styles.section}>
      <h2 style={styles.heading}>Our Recent Blogs</h2>
      <div style={styles.blogsContainer}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
  },
  blogsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default OurRecentBlogs;
