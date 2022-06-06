import { Carousel } from "react-bootstrap"


import "../styles/CarouselCar.css"

export default function CarouselCar({marque,model}) {

  const withoutSpaceModelName = (mod)=> {
    mod.toLowerCase()
    let newModelName=  mod.replace(' ', '-')
      return newModelName
  }



  return (
   
<Carousel controls={false}  >


  <Carousel.Item>
  <img
      className=" d-block w-100 img-carousel"
      src={`/imgs-car/${withoutSpaceModelName(model)}.jpg`}
      alt="Second slide"
    />
   

  </Carousel.Item>

  <Carousel.Item>
  <img
      className="d-block w-100 img-carousel"
      src={`/imgs-car/interior-${withoutSpaceModelName(marque)}.jpg`}
      alt="First slide"
    />

    
  </Carousel.Item>

</Carousel>

)
}