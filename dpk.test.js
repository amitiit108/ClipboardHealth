const { deterministicPartitionKey } = require("./dpk");

describe('deterministicPartitionKey', () => {
  test('should return the same key for the same input', () => {
    const event = { message: 'Hi' };
    const key1 = deterministicPartitionKey(event);
    const key2 = deterministicPartitionKey(event);
    expect(key1).toEqual(key2);
  });

  test('should return the event partitionKey if provided', () => {
    const event = { message: 'Hi', partitionKey: '12345' };
    const key = deterministicPartitionKey(event);
    expect(key).toEqual('12345');
  });

  test('should return "0" when no event is provided', () => {
    const key = deterministicPartitionKey();
    expect(key).toEqual('0');
  });

  test('should return a key with a length less than or equal to 256', () => {
    const event = { message: 'Hello, world!' };
    const key = deterministicPartitionKey(event);
    expect(key.length).toBeLessThanOrEqual(256);
  });
});

