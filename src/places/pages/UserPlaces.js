import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id:"p1",
    tittle:"Empire State Building",
    description:"One of the most famous sky scrapers in the world",
    image:"https://fort.kh.ua/wp-content/uploads/2018/05/Empire-State-Building-1.png",
    address:"20 W 34th St, New York, NY 10001, Соединенные Штаты",
    location:{
      lat:40.7484405,
      lng:-73.9878531
    },
    creator:"u2"
  }
];

const UserPlaces = () => {
  const {userId} = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;