const { nameOfClient } = require('./testing')
const {whoAmI} = require('./testing')


test('must be a function', () => {
    expect(nameOfClient) .toBeInstanceOf(Function);
});
test('must return a string', () => {
    expect(typeof(nameOfClient())) .toBe("string");
});

