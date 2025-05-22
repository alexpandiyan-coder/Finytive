import Carousel from 'react-bootstrap/Carousel';
import CloudImage from './cloud-storage-background-business-network-design.jpg';
import AiImage from './Blog-Images---The-Future-of-SEO-AG-4 1.png';
import MobileImage from './Blog-Images---The-Future-of-SEO-AG-6 1.png';

function CarouselFadeExample() {
  return (
    <Carousel fade interval={3000} style={{ width: "1000px", margin: "0 auto", height: "350px" }}>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AiImage}
          alt="AI Solutions"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>AI Solutions</h3>
          <p>Leverage AI to automate operations and gain business insights.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CloudImage}
          alt="Cloud Computing"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Cloud Computing</h3>
          <p>Scale applications with cloud services and infrastructure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MobileImage}
          alt="Mobile App Development"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Mobile App Development</h3>
          <p>Build seamless and high-performance mobile apps.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CloudImage}
          alt="Banking Applications"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Java Enterprise Application</h3>
          <p>Develop secure and robust banking platforms.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselFadeExample;
