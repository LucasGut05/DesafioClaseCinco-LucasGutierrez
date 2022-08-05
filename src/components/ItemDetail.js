import React from "react";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="flex bg-warning">
      <h3>ItemDetail</h3>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <img src={`${item.image}`} alt={`${item.image}`}></img>
      <ItemCount stock={item.stock} initial={1} />
    </div>
  );
};

export default ItemDetail;
