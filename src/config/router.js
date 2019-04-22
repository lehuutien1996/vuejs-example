export default function (router) {

  router.beforeEach((to, from, next) => {
    // console.log(to, from);

    if (to.matched.some(rec => rec.meta.requiresAuth)) {
      // console.log('CAN PHAI LOGIN');
    }

    next();
  });

  return router;
}
