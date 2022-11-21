const prisma = require('../../src/db/prisma');

let user1 = {
  name: 'Rafi',
  phoneNo: '999'
};

let user2 = {
  name: 'Asif',
  phoneNo: '999'
};

let product1 = {
  name: 'Mouse',
  price: 12,
  category: 'electronics',
  adminId: 1
};

let product2 = {
  name: 'Olive Oil',
  price: 15,
  category: 'health',
  adminId: 1
};

let product3 = {
  name: 'Napa',
  price: 10,
  category: 'health',
  adminId: 1
};
const setUpDatabase = async () => {
  await prisma.customer.deleteMany();
  await prisma.product.deleteMany();
  await prisma.customer.create({ data: user1 });
  await prisma.customer.create({ data: user2 });

  await prisma.product.create({ data: product1 });
  await prisma.product.create({ data: product2 });
};

module.exports = {
  setUpDatabase,
  user1,
  user2,
  product1,
  product2,
  product3
};
