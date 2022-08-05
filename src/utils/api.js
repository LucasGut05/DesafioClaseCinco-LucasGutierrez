/***********************Request-simple**************************** */

export const createData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });
/****************************Actualización************************************* */
export const updateData = (data) =>
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(data),
  });

/**********************************Actualización con parametros******************************************** */

export const updateDataParam = (data) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${data.userId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

/************************************Delete data********************** */

export const deleteData = (dataId) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${dataId}`, {
    method: "DELETE",
  });

/********************Función Mock******************** */

const products = [
  { id: 0, name: "Lucas", username: "Lucas", email: "1234@hola.com.ar" },
];

export const getItem = () => {
  const task = new Promise((resolve) => {
    setTimeout(() => resolve(products[0]), 2000);
  });
  return task;
};
