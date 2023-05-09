const products = require("../data/db.json");
const uuid = require("uuid");
const path = require("path");
const { writeDataToFile } = require("../util");

async function findAll() {
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(products));
  });
}

async function findProductById(id) {
  return new Promise((resolve, reject) => {
    const target = JSON.stringify(
      products.find((product) => product.id === id)
    );
    if (target) {
      resolve(target);
    } else {
      reject(JSON.stringify({ message: "Product Not Found" }));
    }
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    product = { id: uuid.v4(), ...product };
    products.push(product);
    writeDataToFile("./data/db.json", products);
    resolve(product);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    product = { id, ...product };
    products[index] = { id, ...product };
    console.log(products);

    writeDataToFile("./data/db.json", products);

    resolve(product);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const modified = products.filter((prod) => {
      return prod.id !== id;
    });
    writeDataToFile("./data/db.json", modified);
  });
}
module.exports = {
  findAll,
  findProductById,
  create,
  update,
  remove,
};
