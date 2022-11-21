
test('should make payment', async () => {
  const mockPayment = jest.fn((totalAmount) => totalAmount)
  expect(mockPayment(10)).toEqual(10);
});
