// import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";



const ItemListContainer = ({ props }) => {
  const [items, setItems] = useState([])

  useEffect( () => {
   fetch('https://jsonplaceholder.typicode.com/users%27')
   .then((response) => response.json())
   .then((data) => {
    console.log(data)
    setItems(data)
   })

}, [])

  return (
    <div>
      <h1>{props}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
