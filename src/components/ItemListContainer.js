import React, { useEffect, useState } from "react";
import { createData } from "../utils/api";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [listaAlimentos, setListaAlimentos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaAlimentos(data);
      });
  }, []);

  return (
    <div>
      <ItemList listaAlimentos={listaAlimentos} />
    </div>
  );
};
