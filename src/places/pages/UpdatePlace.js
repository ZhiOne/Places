import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import "./NewPlace.css"

const DUMMY_PLACES = [
  {
    userId: "p1",
    tittle: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    image: "https://fort.kh.ua/wp-content/uploads/2018/05/Empire-State-Building-1.png",
    address: "20 W 34th St, New York, NY 10001, Соединенные Штаты",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UpdatePlace = props => {
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACES.filter(place => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place !</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, enter valid title."
        onInput={() => {
        }}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please, enter a valid valid description (min. 5 characters) ."
        onInput={() => {
        }}
        value={identifiedPlace.description}
        valid={true}
      />
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, enter valid title."
        onInput={() => {
        }}
        value={identifiedPlace.title}
        valid={true}
      />
      <Button type="submit" disabled>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
