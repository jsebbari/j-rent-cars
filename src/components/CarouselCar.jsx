import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { storage } from "../firebase/firebase.config";
import uuid from "react-uuid";
import GridLoader  from "react-spinners/GridLoader";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import "../styles/CarouselCar.css";

export default function CarouselCar(props) {

  const { marque, model } = props
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const withoutSpaceModelName = (mod) => {
    let lowerText = mod.toLowerCase();
    let newModelName = lowerText.replace(" ", "-");
    return newModelName;
  };

  //fetch Images________________________________________

  const fetchImg = async (modelCar, marqueCar) => {
    const formatModelCar = withoutSpaceModelName(modelCar);
    const formatMarqueCar = withoutSpaceModelName(marqueCar);
    const imgRef = ref(storage, `img-cars/${formatModelCar}.jpg`);
    const imgInteriorRef = ref(storage,`img-cars/interior-${formatMarqueCar}.jpg`);

    let carImg;
    let interiorImg;

    await getDownloadURL(imgRef).then((x) => {
      carImg = x;
    });
    await getDownloadURL(imgInteriorRef).then((y) => {
      interiorImg = y;
    });

    setUrls([carImg, interiorImg]);

    setLoading(false);
  };

  // useEffect_____________________________________________

  useEffect(async () => {
    fetchImg(model, marque);
  }, []);


  // functions____________________________________________

  const displayImgs = urls.map((img) => {
    return (
      <Carousel.Item key={uuid()}>
        <img
          className="d-block w-100 img-carousel"
          src={img}
          alt={`${marque}-${model}`}
        />
      </Carousel.Item>
    );
  });

  
  return (
    <Carousel controls={false} indicators={loading ? false : true}>
      {!loading && urls.length === 2? (displayImgs) : (
        <Carousel.Item className=" d-block img-carousel w-100 d-flex justify-content-center align-items-center">
          <GridLoader color="#ffc107" loading={setLoading}  size={15}/>
        </Carousel.Item>
      )}
    </Carousel>
  );
}
