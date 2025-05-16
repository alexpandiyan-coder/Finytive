import {
  GiArtificialIntelligence,
  GiSmartphone,
  GiCloudDownload,
  GiBank
} from "react-icons/gi"
import Cloud from "./cloud/Cloud"
import  AiService from "./AiService/AiService"
import "./service.css"
import CarouselFadeExample from './CarouselService/CarouselFadeExample'
import OurWorkflow from "./OurWorkFlow/OurWorkFlow"

function Service() {
  return (
    <div className="service-container">
      <div>
      <CarouselFadeExample/>
     </div>
      {/* Welcome Message */}
      <div className="service-intro text-center my-4">
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
        <div className="service-card-1">
          <span className="card-logo">
            <GiArtificialIntelligence className="i-card-logo" />
          </span>
          <h2 className="card-title">AI Solutions</h2>
          <p className="card-description">
            Leverage Artificial Intelligence to automate operations, enhance decision-making, and gain deep business insights.
          </p>
         
        </div>

        {/* Mobile Application */}
        <div className="service-card-2">
          <span className="card-logo">
            <GiSmartphone className="i-card-logo" />
          </span>
          <h2 className="card-title">Mobile App Development</h2>
          <p className="card-description">
            Build high-performance Android and iOS apps with seamless user experience and scalable architecture.
          </p>
        
        </div>

        {/* Cloud Services */}
        <div className="service-card-3">
          <span className="card-logo">
            <GiCloudDownload className="i-card-logo" />
          </span>
          <h2 className="card-title">Cloud Computing</h2>
          <p className="card-description">
            Migrate, manage, and scale your applications in the cloud for better availability, security, and performance.
          </p>
        
        </div>

        {/* Banking Solutions */}
        <div className="service-card-4">
          <span className="card-logo">
            <GiBank className="i-card-logo" />
          </span>
          <h2 className="card-title">Banking Applications</h2>
          <p className="card-description">
            Develop secure, compliant, and robust banking platforms with modern tech and intelligent automation.
          </p>
        </div>
      </div>
       <AiService/>
      <Cloud/>

      <OurWorkflow/>
    </div>
  )
}

export default Service
