export default (to, from, next) => {
  if (true) {
    console.log('AUTH GUARD');
  }

  return next();
};
