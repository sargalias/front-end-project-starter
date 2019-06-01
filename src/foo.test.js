import foo from './foo';

test('foo', async () => {
  const result = await foo();
  expect(result).toBe('foo');
});
