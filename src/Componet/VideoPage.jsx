import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import video1 from "../assets/3129671-uhd_3840_2160_30fps (1) (1).mp4"; // Your video source

function VideoPage() {
  return (
    <div style={styles.pageContainer}>
      {/* AI Top Content */}
     

      <Carousel style={styles.carousel}>
        <Carousel.Item interval={1000}>
          <video
            className="d-block mx-auto"
            src={video1}
            alt="First slide"
            autoPlay
            muted
            loop
            style={styles.video}
          ></video>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <video
            className="d-block mx-auto"
            src={video1}
            alt="Second slide"
            autoPlay
            muted
            loop
            style={styles.video}
          ></video>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video
            className="d-block mx-auto"
            src={video1}
            alt="Third slide"
            autoPlay
            muted
            loop
            style={styles.video}
          ></video>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Bottom Content */}
      <div style={styles.bottomContent}>
        <h4>Join the AI Revolution</h4>
        <p>Stay updated with the latest AI trends and innovations. Follow us for more!</p>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  aiTopContent: {
    textAlign: 'center',
    padding: '50px',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)', // Gradient background for a modern look
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)', // Soft shadow for a sleek appearance
  },
  carousel: {
    marginTop: '30px',
    borderRadius: '10px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', // Soft shadow for carousel
  },
  video: {
    width: '70%',  // Video size remains 70% of the carousel width
    borderRadius: '10px',
    objectFit: 'cover',
    height: 'auto',
  },
  bottomContent: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    borderRadius: '5px',
    marginTop: 'auto',
  },
};

export default VideoPage;
