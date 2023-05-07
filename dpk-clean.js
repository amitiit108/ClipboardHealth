const crypto = require('crypto');

const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

const hashData = (data) => {
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

const stringifyData = (data) => {
  return typeof data === 'string' ? data : JSON.stringify(data);
};

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = event.partitionKey || hashData(JSON.stringify(event));
  const partitionKey = stringifyData(candidate);

  return partitionKey.length > MAX_PARTITION_KEY_LENGTH
    ? hashData(partitionKey)
    : partitionKey;
};
