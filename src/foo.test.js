import foo from './foo';

test('foo', async () => {
  const result = await foo();
  expect(result).toBe('foo');
});

test('foo mock', async () => {
  jest.resetModules();
  jest.doMock('./foo', () => ({
    __esModule: true,
    default: 'fooMock',
  }));
  const fooModule = await import('./foo');
  expect(fooModule.default).toBe('fooMock');
});
