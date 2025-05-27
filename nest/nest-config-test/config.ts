export default () => {
  const dbPort = 3306;

  return {
    port: parseInt(process.env.PORT || '3000', 10),
    db: {
      host: process.env.DB_HOST || 'localhost',
      port: dbPort,
    },
  };
};
