const prisma = require("../db");
const {
  findProducts,
  findProductsById,
  insertProduct,
  findProductsByName,
  ediProduct,
} = require("./product_repository");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

const getProductById = async (id) => {
  const product = await findProductsById(id);

  if (!product) {
    throw Error("product not found");
  }

  return product;
};

const createProduct = async (newProductData) => {
  const product = await insertProduct(newProductData);

  return product;
};

const deleteProductById = async (id) => {
  await getProductById(id);

  await deleteProductById(id);
};

const editProductById = async (id, productData) => {
  await getProductById(id);

  const product = await ediProduct(id, productData)

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};
