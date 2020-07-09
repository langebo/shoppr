module.exports = {
  src: './src',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  customScalars: {
    BigInt: 'String',
    DateTime: 'String',
    LocalDate: 'String',
    LocalDateTime: 'String',
    Percent: 'Int',
    Probability: 'Int',
  },
};
