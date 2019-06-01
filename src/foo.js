const foo = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('foo'), 1000);
  });
};

(async () => {
  const result = await foo();
  console.log(result); // eslint-disable-line
})();

export default foo;
