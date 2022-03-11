const errorHandler = (error, req, res, next) => {
  console.log('Unexpected error', error);
  res.status('500').send({ msg: 'Unexpected error' });
}

export default errorHandler;