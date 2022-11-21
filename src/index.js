const prisma = require('./db/prisma');
const { createProduct, getAllProduct } = require('./model/product');
const { registerUser } = require('./model/user');

const main = async () => {
  console.log(await getAllProduct({}));
};
main();
