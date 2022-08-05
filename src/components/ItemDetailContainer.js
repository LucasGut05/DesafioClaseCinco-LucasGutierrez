import React, { useEffect, useState } from "react";
import getOneProduct from "../utils/getOneProduct";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getOneProduct
      .then((res) => setItem(res))
      .catch((err) => alert("ERROR", err));
  }, []);

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
