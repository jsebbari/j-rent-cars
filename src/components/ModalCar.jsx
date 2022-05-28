
import { useState } from 'react';
import '../styles/ModalCar.css'



export default function ModalCar({marque, model}) {

  return (
    <div className='ModalCar' >
        <h1>{marque} {model}</h1>
    </div>
  );
}
