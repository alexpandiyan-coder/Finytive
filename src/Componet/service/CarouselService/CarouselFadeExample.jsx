import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CloudImage from './cloud-storage-background-business-network-design.jpg';
import AiImage from './ai.jpg';
import MobileImage from './Blog-Images---The-Future-of-SEO-AG-6 1.png';
import JavaImage from './Enterprise Application1.jpg';
 // Replace with a unique Java image if available

function CarouselFadeExample() {
  const carouselItems = [
    {
      src: AiImage,
      alt: "AI Solutions - Illustration showing artificial intelligence integration",
      title: "AI Solutions",
      desc: "Leverage AI to automate operations and gain business insights.",
    },
    {
      src: CloudImage,
      alt: "Cloud Computing - Cloud storage network concept",
      title: "Cloud Computing",
      desc: "Scale applications with cloud services and infrastructure.",
    },
    {
      src: MobileImage,
      alt: "Mobile App Development - Mobile apps on smartphones",
      title: "Mobile App Development",
      desc: "Build seamless and high-performance mobile apps.",
    },
    {
      src: JavaImage, // Replace with your Java-related image
      alt: " Enterprise application development- Secure banking platform",
      title: " Enterprise application development",
      desc: "Develop secure and robust banking platforms.",
    },
  ];

  return (
    <Carousel fade interval={3000} style={{ width: "100%", maxWidth: "100%", margin: "0 auto", height: "350px" }}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
            style={{ height: "350px", objectFit: "cover", }}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
