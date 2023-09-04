module.exports = {
    tables: [
      {
        TableName: `peopleTable-dev`,
        KeySchema: [{ AttributeName: "Id", KeyType: "HASH" }],
        AttributeDefinitions: [{ AttributeName: "Id", AttributeType: "S" }],
        ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
      },
    ],
  };