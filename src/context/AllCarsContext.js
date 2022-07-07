import { createContext, useEffect, useState } from 'react';

export const AllCarsContext = createContext();


export function AllCarsContextProvider({children}) {

    const [allCars, setAllCars] = useState([])


  useEffect(() => {
        console.log("effect carsContext")
  }, [])
  
  return (
    <AllCarsContext.Provider value={{allCars, setAllCars}}>
      {children}
    </AllCarsContext.Provider>
  )
}

