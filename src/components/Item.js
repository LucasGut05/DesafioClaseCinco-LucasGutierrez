import React from "react";


const Item = ({item}) => {
    return (
      <ol>
      <li>{`Name : ${item.name}`}</li>
      <li> {`Email user : ${item.email}`}</li>
    </ol>
      );
};

export default Item;
