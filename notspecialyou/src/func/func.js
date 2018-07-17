export const check = function (admin, password, callback, error) {
  if (admin === 'admin' && password === '111111') {
    callback()
  } else if (admin && password && (admin !== 'admin' || password !== '111111')) {
    error()
  }
}
