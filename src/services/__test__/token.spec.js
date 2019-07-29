const {signIn} = require('../token.service');

describe('test token service', () => {
  it('should return a jwt', () => {
    const jwt = signIn('Numenu', '123123');

    expect(jwt)
      .toMatch(/\./);
  });

  it('should throw an error when user is invalid', () => {
    expect(() => {
      signIn('user', '123')
    })
      .toThrow();
  })
});