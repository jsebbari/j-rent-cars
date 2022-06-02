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
        img: mercedesClassA,
        description:"Votre Mercedes Classe A AMG Line vous permet d'affirmer votre sportivité, à l'extérieur comme à l'intérieur. Le kit carrosserie AMG rapproche l’esthétique du véhicule de celle des véhicules Mercedes-AMG haute performance."    },
    {
        id:2,
        marque: "Mercedes",
        model: "Classe C",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"3 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: mercedesClassC,
        description:"Que ce soit aux heures de pointe, sur les longs trajets de nuit ou sur des routes inconnues, Votre Classe C Coupé vous permet de conduire nettement plus détendu, notamment durant les situations génératrices de stress."},
    {
        id:3,
        marque: "Volswagen",
        model: "Polo",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: vwPolo,
        description:"Un intérieur et un extérieur à vous couper le souffle. La Nouvelle Polo séduit immédiatement avec sa grande variété d’équipements comme le système de climatisation,l'interface pour téléphone portable..."},
    {
        id:4,
        marque: "Volswagen",
        model: "Golf 8",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: vwGolf8,
        description:"La huitième génération du modèle emblématique Volkswagen établit de nouvelles normes en matière d'innovations, de confort et de connectivité. Des trajets plus confortables grâce aux nouveaux systèmes d’aide au conducteur, le tout combiné à l’atmosphère caractéristique de la Golf."    },
    {
        id:5,
        marque: "Audi",
        model: "A3",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img: audiA3,
        description:"Redécouvrez les plaisirs de la route et offrez-vous un confort unique grâce à l’option Audi drive select. Faites de chaque trajet un moment inoubliable en adaptant votre mode de conduite à votre caractère : auto, dynamic, individual, ou encore. Athlétique, l’Audi A3 Sportback se dote de série, d’une boîte de vitesses manuelle à 6 rapports. "},
    {
        id:6,
        marque: "Audi",
        model: "A7",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:audiA7,
        description:"L’Audi A7 Sportback est une pièce de design. Ses lignes sculpturales et sa signature lumineuse futuriste expriment une vision progressiste de la berline de luxe dynamique. Avec ses optiques étirées et ses lignes tendues, l’Audi A7 Sportback est inspirante et inspirée."    },
    {
        id:7,
        marque: "Bmw",
        model: "Série 1",
        price: 15,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwSerie1,
        description:"La nouvelle BMW Série 1 est arrivée, pour attirer tous les regards. Son design d’exception et son langage plastique progressiste la font immédiatement sortir du lot. Il en est de même pour son habitacle, qui fascine par son ambiance contemporaine ouverte et haut de gamme. "    },
    {
        id:8,
        marque: "Bmw",
        model: "Série 5",
        price: 30,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwSerie5,
        description:"La BMW Série 5 Berline est l'incarnation de la berline d'affaires sportive. Dès le premier regard, elle dégage une sportivité, qui s’exprime surtout par sa silhouette dynamique et son esthétique puriste. Les surfaces claires et les contours précis offrent à l’extérieur une apparence moderne et technique. L'habitacle raffiné et fonctionnel complète l'innovation du véhicule par des technologies d'avant-garde et des équipements sportifs."    },
    {
        id:9,
        marque: "Range Rover",
        model: "Velar",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:rangeRoverVelar,
        description:"Le Range Rover Velar ouvre la voie en matière de design minimaliste. Épuré, élégant et unique, ce modèle en impose par son charisme et sa présence. La puissance raffinée et l’élégance naturelle s’allient à la délicatesse pour faire de ce véhicule un parfait exemple de design automobile contemporain."    },
    {
        id:10,
        marque: "Mercedes",
        model: "Classe G",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:classeG,
        description:"Depuis 40 ans, la Classe G est le premier choix pour tous ceux qui sont amenés à se déplacer à l'écart du réseau routier. Sa partie avant fonctionnelle et robuste a conservé son caractère au fil des décennies, tandis que les lignes claires et les grandes surfaces planes impriment au profil sa signature particulière."
    },
    {
        id:11,
        marque: "Bmw",
        model: "X5",
        price: 40,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"5 portes", icon:doorIcon}, {nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"2 Bagages", icon:bagageIcon}],
        img:bmwX5,
        description:"Équipée des technologies dernier cri pour conjuguer une sécurité accrue à une dynamique de conduite exacerbée sur tous les terrains, la BMW X5 sait de quoi elle est capable."    },
    {
        id:12,
        marque: "Lamborghini",
        model: "Aventador",
        price: 100,
        options:[{nameOpt:'Gps', icon:gpsIcon},{nameOpt:"3 portes", icon:doorIcon},{nameOpt:"Climatisation", icon:climIcon}, {nameOpt:"1 Bagage", icon:bagageIcon}],
        img:lamborghiniAventador,
        description:"L’Aventador a été conçue pour aller au-delà du concept de performance, faisant d’emblée figure de référence dans le domaine des supersportives et devançant les voitures du futur. Une famille de supercars déjà inscrite dans la légende."    },


    
]