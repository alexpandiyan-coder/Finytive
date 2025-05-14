import React, { useState } from 'react';

import "./OurBlog.css"
const  OurBlog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ];

  const courses = [
    { id: 1, title: 'React Fundamentals', category: 'web', duration: '4 weeks', level: 'Beginner' },
    { id: 2, title: 'Advanced JavaScript', category: 'web', duration: '6 weeks', level: 'Advanced' },
    { id: 3, title: 'Python for Data Analysis', category: 'data', duration: '5 weeks', level: 'Intermediate' },
    { id: 4, title: 'UI/UX Design Principles', category: 'design', duration: '3 weeks', level: 'Beginner' },
    { id: 5, title: 'Digital Marketing 101', category: 'business', duration: '4 weeks', level: 'Beginner' },
    { id: 6, title: 'Machine Learning Basics', category: 'data', duration: '8 weeks', level: 'Advanced' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="course-catalog">
      <header className="header">
        <h1>Course Catalog</h1>
        <p>Browse our selection of available courses</p>
      </header>

      <div className="container">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="course-list">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <span className={`category-badge ${course.category}`}>
                    {categories.find(cat => cat.id === course.category).name}
                  </span>
                  <div className="course-meta">
                    <span>Duration: {course.duration}</span>
                    <span>Level: {course.level}</span>
                  </div>
                </div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            ))
          ) : (
            <p className="no-results">No courses match your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;