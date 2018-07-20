export const check = function (msg, success, nameErr, passErr) {
  if (msg.data === 'success') {
    success()
  } else if (msg.data === 'nameErr') {
    nameErr()
  } else if (msg.data === 'passErr') {
    passErr()
  }
}
