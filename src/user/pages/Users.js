import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "MAX",
      image: "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg",
      places: "5",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
