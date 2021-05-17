module.exports = {
  db: {
    connectionString: `mongodb://localhost:27017/galleryApp`,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    },
  },

  aws:{
      secretAccessKey:'NQxJXEpWKpSYf2OyV3DT9Kj3z2uZHY8S2vdqUPS2',
      accessKeyId:'AKIAR65GL72HHLHNMRFH',
      region:'ap-south-1'
  },

  jwt:{
      jwtKey:'bala-rao'
  }
};
