import mercedesClassA from '../imgs/mercedesclassea.png'
import mercedesClassC from '../imgs/mercedesclassec.png'
import vwGolf8 from '../imgs/vwGolf8.png'
import vwPolo from '../imgs/vwPolo.png'
import bmwSerie5 from '../imgs/bmwserie5.png'
import bmwSerie1 from '../imgs/bmwserie1.png'
import audiA3 from"../imgs/audia3.png"
import audiA7 from"../imgs/audia7.png"
import lamborghiniAventador from"../imgs/lamborghiniaventador.png"
import rangeRoverVelar from"../imgs/rangerovervelar.png"
import classeG from"../imgs/classeg.png"
import bmwX5 from"../imgs/bmwx5.png"
import { GiCarDoor, GiGps } from 'react-icons/gi'
import { FaRegSnowflake } from 'react-icons/fa'
import { MdLuggage } from 'react-icons/md'


const doorIcon = <GiCarDoor size={30}/> 
const gpsIcon = <GiGps size={30} />
const climIcon = <FaRegSnowflake size={30}/>
const bagageIcon= <MdLuggage size={30} />

export const cars = [

    {
        id:1,
        marque: "Mercedes",
        model: "Classe A",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: mercedesClassA
    },
    {
        id:2,
        marque: "Mercedes",
        model: "Classe C",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"3 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: mercedesClassC
    },
    {
        id:3,
        marque: "Volswagen",
        model: "Polo",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: vwPolo
    },
    {
        id:4,
        marque: "Volswagen",
        model: "Golf 8",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: vwGolf8
    },
    {
        id:5,
        marque: "Audi",
        model: "A3",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: audiA3
    },
    {
        id:6,
        marque: "Audi",
        model: "A7",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:audiA7
    },
    {
        id:7,
        marque: "Bmw",
        model: "Série 1",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwSerie1
    },
    {
        id:8,
        marque: "Bmw",
        model: "Série 5",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwSerie5
    },
    {
        id:9,
        marque: "Range Rover",
        model: "Velar",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:rangeRoverVelar
    },
    {
        id:10,
        marque: "Mercedes",
        model: "Classe G",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:classeG
    },
    {
        id:11,
        marque: "Bmw",
        model: "X5",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwX5
    },
    {
        id:12,
        marque: "Lamborghini",
        model: "Aventador",
        price: 100,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"3 portes", icon:doorIcon},{nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"1 Bagage", icon:bagageIcon}],
        img:lamborghiniAventador
    },


    
]