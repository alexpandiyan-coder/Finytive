import React from 'react';
import './projectPageLayout.css';

function ProjectPageLayout() {
  const features = [
    "Face Recognition-Based Attendance",
    "Geo-Fencing Integration",
    "Real-Time Attendance Logs",
    "User-Friendly Interface",
    "Attendance History & Reports",
    "Smart Time Management"
  ];

  const descriptions = [
    "Capture attendance effortlessly with advanced facial recognition.",
    "Track employees using precise geo-fencing technology.",
    "Get real-time attendance logs and analytics.",
  ];

  return (
    <div className='project-page-layout'>

      <div className='project-items'>
        {features.map((feature, index) => (
          <div className="items" key={index}>
            {feature}
          </div>
        ))}
      </div>

      <div className='project-data'>
        <div className="project-img">
          <img src="https://via.placeholder.com/400x250" alt="Project Illustration" />
        </div>
        <div className="project-text">
          {descriptions.map((desc, index) => (
            <div className="project-point" key={index}>
              {desc}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectPageLayout;
