const products = require("../data/db.json");
const {
  findAll,
  findProductById,
  create,
  update,
  remove,
} = require("../model/productModel");
const { writeDataToFile, getResponseBody } = require("../util");

// @desc    Get Products
// @route   GET /api/products
async function getProducts(req, res) {
  const data = await findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
}

// @desc    Get a Product
// @route   GET /api/products/:id
async function getProductById(req, res, id) {
  const data = findProductById(id)
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(err);
    });
}

// @desc    Create a Product
// @route   POST /api/products
async function createProduct(req, res) {
  try {
    const data = await getResponseBody(req);
    const { title, description, price } = JSON.parse(data);
    const product = {
      title,
      description,
      price,
    };

    console.log(product);
    const newProduct = await create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

// @desc    Update a Product
// @route   PUT /api/products/:id
async function updateProduct(req, res, id) {
  try {
    const product = await findProductById(id);
    if (!product) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Bitch you failed to specify an existing product",
        })
      );
    } else {
      const data = await getResponseBody(req);

      const { title, price, description } = JSON.parse(data);
      const updProduct = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };
      const updated = await update(id, updProduct);
      console.log(updated);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updated));
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res, id) {
  try {
    const product = await findProductById(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Bitch we cant find that product",
        })
      );
    } else {
      remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ id }));
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
