import { Carousel } from "react-bootstrap"


import "../styles/CarouselCar.css"

export default function CarouselCar({marque,model}) {
  const withoutSpace = (mod)=> {
    mod.toLowerCase()
    let newModelName=  mod.replace(' ', '-')
      return newModelName
  }



  return (
   
<Carousel controls={false}>


  <Carousel.Item>
  <img
      className="img-carousel"
      src={`/imgs-car/${withoutSpace(model)}.jpg`}
      alt="Second slide"
    />
   

  </Carousel.Item>

  <Carousel.Item>
  <img
      className="img-carousel"
      src={`/imgs-car/interior-${withoutSpace(marque)}.jpg`}
      alt="First slide"
    />

    
  </Carousel.Item>

</Carousel>

)
}