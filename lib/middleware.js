export function runMiddleware(req, res, next) {
  return new Promise((resolve, reject) => {
    next(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
