const prisma = require('../db/prisma');

const createProduct = async (userName, productData) => {
  const isAdmin = await prisma.admin.findFirst({ where: { name: userName } });

  if (!isAdmin) return null;

  const { name, price, category } = productData;
  const product = await prisma.product.create({
    data: {
      name,
      category,
      price,
      adminId: isAdmin.id
    },
    select: {
      name: true,
      price: true
    }
  });

  return product;
};

const getAllProduct = async () => {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      price: true
    }
  });

  if (!products) return null;
  return products;
};

const deleteProduct = async (userName, productId) => {
  const isAdmin = await prisma.admin.findFirst({ where: { name: userName } });

  if (!isAdmin) return null;

  const product = await prisma.product.delete({
    where: { id: productId },
    select: {
      name: true
    }
  });

  if (!product) return null;

  return product;
};

module.exports = {
  createProduct,
  getAllProduct,
  deleteProduct
};
