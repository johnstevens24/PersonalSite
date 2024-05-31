import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './ProjectsStyles.css'
const ProjectCarousel = ({ project }) => {
    
    
    const tellMeImages = [require('../../../assets/images/TellMeScreenshots/IMG_4305.PNG'), require('../../../assets/images/TellMeScreenshots/IMG_4306.PNG'), require('../../../assets/images/TellMeScreenshots/IMG_4310.PNG'), require('../../../assets/images/TellMeScreenshots/IMG_4311.PNG')]
    const tiltImages = [require('../../../assets/images/TiltScreenshots/IMG_4563.PNG'), require('../../../assets/images/TiltScreenshots/IMG_4564.PNG')]
    
    let images = [];
  
    switch (project.name) {
      case 'TILT':
        images = tiltImages;
        break;
      case 'TellMe':
        images = tellMeImages;
        break;
      case 'SLC Air Quality':
      case 'SCI Research':
        images = [require('../../../assets/images/sampleImage.jpg')];
        break;
      default:
        break;
    }
  
    return (
      <Carousel 
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        {images.map((image, index) => (
          <img key={index} className="slide" alt={`slide-${index}`} src={image} />
        ))}
      </Carousel>
    );
  };
  
  export default ProjectCarousel;