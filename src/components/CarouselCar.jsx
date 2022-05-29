import { Carousel } from "react-bootstrap"


import "../styles/CarouselCar.css"

export default function CarouselCar({img}) {
  return (
   
<Carousel controls={false}>

  <Carousel.Item>

    <img
      className="img-carousel"
      src='/interior-car.jpg'
      alt="First slide"
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      className="img-carousel"
      src='/interior-car.jpg'
      alt="Second slide"
    />

    
  </Carousel.Item>

</Carousel>

)
}