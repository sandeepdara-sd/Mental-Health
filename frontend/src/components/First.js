import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia,  Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import image1 from '../images/image1.jpg';
import image2 from '../images/image1.jpg';

const AutomaticCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: image1,
    },
    {
      image: 'https://img.freepik.com/premium-photo/three-dimensional-render-human-brain-lifting-weights_1080238-1725.jpg?size=626&ext=jpg&ga=GA1.1.1260213518.1726549513&semt=ais_hybrid',
    },
    {
      image: image2,
    },
  ];

  return (
    <>
      <style>
        {`
        .text {
          background-image: url("https://th.bing.com/th/id/OIP.1CR7YohPeB9wD3cPFRmu3ACxEs?w=192&h=324&c=7&r=0&o=5&dpr=1.3&pid=1.7");
          background-size: contain;
          background-clip: text;
          color: transparent;
          font-size: 70px;
          font-weight: bold;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .card {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 450px; /* Set a fixed height for the card */
          overflow: hidden; /* Hide any overflowing content */
          width: auto /* Full width of the viewport */
          margin: 0; /* Remove default margin */
        }
        .cardMedia {
          width: 100%; 
          height: 100%; 
          object-fit: contain; 
        }
        `}
      </style>

      <Box textAlign="center" mt={2}>
        <Typography variant="h2" fontFamily="revert-layer" color="primary">
          <b className="text">WELCOME TO MENTAL WELLNESS TRACKER</b>
        </Typography>
      </Box>

      <Box mt={3}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slick-slide">
              <Card className="card">
                <CardMedia
                  component="img"
                  className="cardMedia"
                  image={slide.image}
                  alt={`Slide ${index + 1}`} // Use a dynamic alt text
                />
                
              </Card>
            </div>
          ))}
        </Slider>
      </Box>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>
        Build Your thoughts
      </Typography>
      <br></br>
      <Box sx={{
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

      }}>
      <Typography sx={{textAlign:'center',width:'700px'}} >
      Tracking how you are feeling each day can be helpful to understand your overall mood and state of well-being. If you live with depression or bipolar, understanding the changes in your mood, interactions of medications, substance use, nutritional intake, and exercise, will help you gain more insight into what works best for your personal wellness.
      </Typography>
      </Box>
    </>
  );
};

export default AutomaticCarousel;
