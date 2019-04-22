export default (to, from, next) => {
  console.log('ADMIN GUARD');

  return next();
};
