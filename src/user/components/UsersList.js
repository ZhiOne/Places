import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";


const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );

  }

  return (
    <ul className="users-list">
      {items.map(user => (
        <div key={Math.random()}>
          <UserItem
            user={user}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        </div>
        ),
      )}
    </ul>
  );
};

export default UsersList;
