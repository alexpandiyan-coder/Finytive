import {
  GiArtificialIntelligence,
  GiSmartphone,
  GiCloudDownload,
  GiBank
} from "react-icons/gi"
import Cloud from "./cloud/Cloud"
import AiService from "./AiService/AiService"
import "./service.css"
import CarouselFadeExample from './CarouselService/CarouselFadeExample'
import OurWorkflow from "./OurWorkFlow/OurWorkFlow"
import Ai from "./jsonFile/Ai.json"
import javaImage from "./jsonFile/java.json"
import cloud from "./jsonFile/cloud.json"
import mobile from "./jsonFile/mobile.json"
import Lottie from "lottie-react"


function Service() {
  return (
    <div className="service-container">
      {/* Welcome Message */}
      <div className="service-intro text-center my-4">
        <div data-aos="zoom-out">
        <p className="logo-name companey-name fs-2">
          Welcome to Finytive Service
        </p>
        <p className="intro-subtext">
          Empowering startups and enterprises with intelligent digital solutions
        </p>
    </div>
        {/* Service Cards Section */}
        <div className="service-cards">

          {/* AI Solutions */}
          <div className="service-card service-card-1" data-aos="fade-up-right">
            <span className="card-logo">
              <Lottie animationData={Ai} loop={true} style={{ height: 100, width: 100 }}/>
            </span>
            <div className="contant-top">
              <h2 className="card-title">AI Solutions</h2>
              <p className="card-description">
                Leverage Artificial Intelligence to automate operations, enhance decision-making, and gain deep business insights.
              </p>
            </div>
          </div>

          {/* Mobile Application */}
          <div className="service-card service-card-2" data-aos="fade-up-left">
            <span className="card-logo">
                <Lottie animationData={mobile} loop={true}  autoplay={true} style={{ height: 100, width: 100 }}/>
            </span>
            <div className="contant-top">
              <h2 className="card-title">Mobile App Development</h2>
              <p className="card-description">
                Build high-performance Android and iOS apps with seamless user experience and scalable architecture.
              </p>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="service-card service-card-3" data-aos="fade-up-right">
            <span className="card-logo">
              <Lottie animationData={cloud} loop={true}  autoplay={true} style={{ height: 100, width: 100 }}/>
            </span>
            <div className="contant-top">
              <h2 className="card-title">Cloud Computing</h2>
              <p className="card-description">
                Migrate, manage, and scale your applications in the cloud for better availability, security, and performance.
              </p>
            </div>
          </div>

          {/* Banking Solutions */}
          <div className="service-card service-card-4" data-aos="fade-up-left">
            <span className="card-logo">
               <Lottie animationData={javaImage} loop={true}  autoplay={true} style={{ height: 100, width: 100 }}/>
            </span>
            <div className="contant-top">
              <h2 className="card-title">Java Enterprise Applications</h2>
              <p className="card-description">
                Develop secure, compliant, and robust banking platforms with modern tech and intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AiService />
      <Cloud />
      <OurWorkflow />
    </div>
  )
}

export default Service
