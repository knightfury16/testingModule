const prisma = require('../db/prisma');

const registerUser = async data => {
  const { name, phoneNo } = data;
  const user = await prisma.customer.create({ data: { name, phoneNo } });
  return user;
};

const loginUser = async name => {
  const user = await prisma.customer.findFirst({ where: { name } });
  if (!user) return null;
  return user;
};

module.exports = {
  registerUser,
  loginUser
};
