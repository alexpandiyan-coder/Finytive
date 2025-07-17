import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheck } from 'react-icons/fa';
import { productData } from "./ProductDataFile";
import './ProductSubPage.css';
import FAQSection from '../../FAQSection/FAQSection';
import CTASection from '../../CtaSection';
import PrivacyPolicy from '../../PrivacyPolicy';

function ProductDetailPage() {
  const { id } = useParams();
  const [selectedFeature, setSelectedFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const product = productData[id];

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className='bg-color-products'>
      <div className="header-content" data-aos="fade-up">
        <h2 className="title">
          <span className='companey-name'>{product.title}</span><br />
          <span className='text-warning fs-1'>{product.title2}</span>
        </h2>
        <p className="subtitle">{product.description}</p>
      </div>

      <div className='project-page-layout'>
        <div className='project-items'>
          {product.features.map((feature, index) => (
            <div
              className={`items ${selectedFeature === index ? 'active' : ''}`}
              key={index}
              onClick={() => setSelectedFeature(index)}
            >
              <div className="feature-content">
                {feature.icon}
                <span>{feature.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='project-data'>
          <div className="project-img">
            <img
              src={product.features[selectedFeature].image}
              alt={product.features[selectedFeature].title}
            />
          </div>
          <div className="project-text">
            {product.features[selectedFeature].descriptions.map((desc, index) => (
              <div className="project-point" key={index} data-aos="fade-right"
            data-aos-delay={index * 200}>
                <FaCheck className="check-icon" />
                <span className='project-point-text'>{desc}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div>
        <FAQSection/>
      </div>
      <CTASection/>
      {/* <PrivacyPolicy/> */}
    </div>
  );
}

export default ProductDetailPage;
