const oneProduct = {
  id: "1",
  img: "https://via.placeholder.com/150/771796",
  name: "banana",
  category: "fruta",
  stock: "25",
  price: "100",
};

const getOneProduct = new Promise((resolve) => {
  setTimeout(() => {
    resolve(oneProduct);
  }, 2000);
});

export default getOneProduct;
