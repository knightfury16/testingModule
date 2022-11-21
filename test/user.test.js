const prisma = require('../src/db/prisma');
const { registerUser, loginUser } = require('../src/model/user');
const { setUpDatabase, user1 } = require('./fixtures/db');

beforeEach(setUpDatabase);

test('should register new user', async () => {
  const user = await registerUser({
    name: 'Shad',
    phoneNo: '999'
  });

  expect(user).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    phoneNo: '999'
  });
});

test('should login user', async () => {
  // valid user
  const user = await loginUser(user1.name);
  expect(user).toEqual({
    id: expect.any(Number),
    ...user1
  });

  // invalid user
  const invUser = await loginUser('Odysias');
  expect(invUser).toBeNull();
});
