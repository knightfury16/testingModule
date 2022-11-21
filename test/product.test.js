const prisma = require('../src/db/prisma');
const { getAllProduct, createProduct, deleteProduct } = require('../src/model/product');
const { setUpDatabase, product1 } = require('./fixtures/db');

beforeEach(setUpDatabase);

test('should get all products', async () => {
  const expected = [
    { name: 'Mouse', price: 12 },
    { name: 'Olive Oil', price: 15 }
  ];
  const products = await getAllProduct();
  expect(products).toEqual(expect.arrayContaining(expected));
});

test('should create product by only admin', async () => {
  const product = await createProduct('suhaib', {
    name: 'Pear',
    price: 30,
    category: 'Fruit'
  });

  expect(product).toEqual({
    name: expect.any(String),
    price: expect.any(Number)
  });
});

test('should not create product if not admin', async () => {
  // not admin
  const product2 = await createProduct('shad', {
    name: 'Pear',
    price: 20,
    category: 'Fruit'
  });
  expect(product2).toBeNull();
});

test('should delete product by only admin', async () => {
  const product = await prisma.product.findFirst({ where: { name: product1.name } });
  const prod = await deleteProduct('suhaib', product.id);
  expect(prod).toEqual({
    name: expect.any(String)
  });
});

test('should not delete product if not admin', async () => {
  const product = await prisma.product.findFirst({ where: { name: product1.name } });
  const prod = await deleteProduct('anas', product.id);
  expect(prod).toBeNull();
});
