function isCommented(fn) {
  return /\/\/|\*(?=\/)/g.test(fn.toString());
}
function isPromiseUsed(fn) {
  const methods = [
    'Promise.all',
    'Promise.allSettled',
    'Promise.any',
    'Promise.race',
  ];
  const fnStr = fn.toString();
  return methods.some((method) => fnStr.includes(method));
}
module.exports = {
  isCommented,
  isPromiseUsed,
};
