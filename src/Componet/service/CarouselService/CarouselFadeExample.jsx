import Carousel from 'react-bootstrap/Carousel';
import CloudImage from './cloud-storage-background-business-network-design.jpg';
import AiImage from './Blog-Images---The-Future-of-SEO-AG-4 1.png';
import MobileImage from './Blog-Images---The-Future-of-SEO-AG-6 1.png';

function CarouselFadeExample() {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item>
        <img
          className="d-block "
          src={AiImage}
          alt="AI Solutions"
            style={{width:"100%",height:"500px"}}
        />
        <Carousel.Caption>
          <h3>AI Solutions</h3>
          <p>Leverage AI to automate operations and gain business insights.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={CloudImage}
          alt="Mobile App Development"
            style={{width:"100%",height:"500px"}}
        />
        <Carousel.Caption>
          <h3>CloudImagec</h3>
          <p>Build seamless and high-performance mobile apps.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block "
          src={MobileImage}
          alt="Banking Applications"
            style={{width:"100%",height:"500px"}}
        />
        <Carousel.Caption>
          <h3>Banking Applications</h3>
          <p>Develop secure and robust banking platforms.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src={CloudImage}
          alt="Cloud Computing"
          style={{width:"100%",height:"500px"}}
        />
        <Carousel.Caption>
          <h3>Cloud Computing</h3>
          <p>Scale applications with cloud services and infrastructure.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
